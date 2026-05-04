// Search: game detail page script. Renders game info, trailer, review cards, review form, and related games.

import { fullGameData, searchGameList } from '../core/data.js';
import { scoreClass, formatDate } from '../core/utils.js';
import { initPageTransitions, initBackToTop, initLiveClock, initScrollReveal, navigate } from '../core/app.js';
import { initTheme } from '../core/theme.js';
import { initNavbar, syncWishlistCount } from '../components/navbar.js';
import { initReviewViewer } from '../components/reviewViewer.js';
import { createGameCard } from '../components/gameCard.js';
import { initWishlistBtn } from '../features/wishlist.js';
import { saveReview, getReviews, deleteReviewByUser } from '../features/reviews.js';
import { getSession, incrementReviewCount } from '../core/auth.js';

const params = new URLSearchParams(window.location.search);
const gameId = params.get('id') || 'elden';
const game   = fullGameData[gameId] || fullGameData.elden;

let openViewer = null;

// Search: game hero section.
function renderHero() {
  document.title = `${game.title} - MetaPlay`;

  const bg = document.getElementById('gameHeroBg');
  if (bg) bg.style.backgroundImage = `url('${game.cover}')`;

  const cls = scoreClass(game.metaScore);
  document.getElementById('gameHeroContent').innerHTML = `
    <div class="game-hero-cover">
      <img src="${game.cover}" alt="${game.title}"
        onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&q=70'">
    </div>
    <div class="game-hero-info">
      <h1 class="game-hero-title">${game.title}</h1>
      <div class="game-hero-meta">
        <span>${game.developer}</span>
        <span class="meta-dot">·</span>
        <span>${game.release}</span>
        <span class="meta-dot">·</span>
        <span>${game.genre}</span>
      </div>
      <div class="game-hero-score">
        <div class="score-num ${cls}">${game.metaScore}</div>
        <div>
          <div class="score-label">METASCORE</div>
          <div class="score-caption">Critic consensus</div>
        </div>
      </div>
    </div>
  `;
}

// Search: game trailer section.
function renderTrailer() {
  const frame = document.getElementById('trailerFrame');
  if (frame) frame.src = `https://www.youtube.com/embed/${game.trailer}`;
}

// Search: game metadata sidebar.
function renderMeta() {
  document.getElementById('gameDeveloper').textContent = game.developer;
  document.getElementById('gameRelease').textContent   = game.release;
  document.getElementById('gamePlatforms').textContent = game.platforms;
  document.getElementById('gameGenre').textContent     = game.genre;
  document.getElementById('gameSummary').textContent   = game.summary;

  const cls = scoreClass(game.metaScore);
  const scoreEl = document.getElementById('metaScore');
  scoreEl.textContent = game.metaScore;
  scoreEl.className   = `score-num ${cls}`;
  document.getElementById('metaScoreBadge').textContent = `Metacritic ${game.metaScore}`;
  document.getElementById('viewAllLink').href = `reviews.html?id=${game.id}`;

  document.getElementById('positiveBar').style.width   = `${game.positive}%`;
  document.getElementById('mixedBar').style.width      = `${game.mixed}%`;
  document.getElementById('negativeBar').style.width   = `${game.negative}%`;
  document.getElementById('positiveLabel').textContent  = `${game.positive}%`;
  document.getElementById('mixedLabel').textContent    = `${game.mixed}%`;
  document.getElementById('negativeLabel').textContent  = `${game.negative}%`;

  document.getElementById('platformLinks').innerHTML = (game.purchaseLinks || []).map(l => `
    <a class="platform-link" href="${l.url}" target="_blank" rel="noopener">
      <span>${l.icon} ${l.name}</span><span>↗</span>
    </a>
  `).join('');

  // Search: auto fill reviewer name when logged in.
  const session = getSession();
  const nameInput = document.getElementById('reviewerName');
  if (session && nameInput) {
    nameInput.value = session.username;
    nameInput.setAttribute('readonly', 'readonly');
    nameInput.style.color = 'var(--accent)';
  }
}

// Search: review avatar, profile photo, user initial.
function avatarHtml(user, score) {
  const session = getSession();
  const cls = scoreClass(score);
  const initial = String(user || 'U').charAt(0).toUpperCase();

  // Search: show logged in user photo on own review.
  if (session && session.username === user && session.photo) {
    return `<div class="reviewer-avatar ${cls} photo-avatar" style="background-image:url('${session.photo}');"></div>`;
  }
  return `<div class="reviewer-avatar ${cls}">${initial}</div>`;
}

// Search: build review card HTML.
function buildReviewCard(source, score, date, text, storedIndex = null) {
  const cls = scoreClass(score);
  const session = getSession();
  const isOwn = session && session.username === source && storedIndex !== null;

  const card = document.createElement('div');
  card.className = 'review-card';
  card.innerHTML = `
    <div class="review-card-header">
      <div class="reviewer-info">
        ${avatarHtml(source, score)}
        <div>
          <div class="reviewer-name">${source}</div>
          <div class="reviewer-date">${date}</div>
        </div>
      </div>
      <div class="review-actions">
        <div class="review-score ${cls}">${score}/10</div>
        ${isOwn ? `<button class="delete-review-btn" data-idx="${storedIndex}">Delete</button>` : ''}
      </div>
    </div>
    <p class="review-text">${String(text).substring(0,130)}${text.length>130?'…':''}</p>
    <button class="expand-btn" type="button">
      Read Full Review →
    </button>
  `;

  const expandBtn = card.querySelector('.expand-btn');
  expandBtn.dataset.source = source;
  expandBtn.dataset.score = score;
  expandBtn.dataset.date = date;
  expandBtn.dataset.text = text;
  expandBtn.addEventListener('click', e => {
    openViewer?.(e.currentTarget);
  });

  // Search: delete own review button.
  const delBtn = card.querySelector('.delete-review-btn');
  if (delBtn) {
    delBtn.addEventListener('click', () => {
      if (!confirm('Delete your review?')) return;
      const idx = parseInt(delBtn.dataset.idx);
      const deleted = deleteReviewByUser(gameId, session.username, idx);
      if (deleted) {
        card.style.opacity = '0';
        card.style.transition = '.3s';
        setTimeout(() => card.remove(), 300);
      }
    });
  }

  return card;
}

// Search: critic reviews section.
function renderCritics() {
  const container = document.getElementById('criticReviewsContainer');
  if (!container) return;
  container.innerHTML = '';

  const reviews = game.criticReviews?.length
    ? game.criticReviews
    : [{ source: 'MetaPlay', score: game.metaScore ? Math.round(game.metaScore / 10) : 8, date: 'Today', text: game.summary }];

  reviews.forEach(r => {
    container.appendChild(buildReviewCard(r.source, r.score, r.date, r.text));
  });
}

// Search: user reviews section.
function renderUserReviews() {
  const container = document.getElementById('userReviewsContainer');
  const stored    = document.getElementById('storedReviewsArea');
  if (!container) return;
  container.innerHTML = '';
  if (stored) stored.innerHTML = '';

  const defaults = game.defaultUserReviews?.length
    ? game.defaultUserReviews
    : [{ user: 'player', score: game.metaScore ? Math.round(game.metaScore / 10) : 8, date: new Date().toISOString(), text: 'No community review yet. Be first to share full experience.' }];

  defaults.forEach(r => {
    container.appendChild(buildReviewCard(r.user, r.score, formatDate(r.date), r.text));
  });

  const saved = getReviews(gameId);
  if (saved.length > 0 && stored) {
    stored.innerHTML = `<div class="group-header community-header">
      <h4 class="group-title">Community Reviews</h4>
    </div>`;
    saved.forEach((r, idx) =>
      stored.appendChild(buildReviewCard(r.user, r.score, formatDate(r.date), r.text, idx))
    );
  }
}

// Search: submit new review form.
function initSubmitReview() {
  const btn = document.getElementById('submitReviewBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const name  = document.getElementById('reviewerName').value.trim();
    const score = document.getElementById('reviewScore').value;
    const text  = document.getElementById('reviewText').value.trim();

    if (name.length < 2)  return alert('Name must be at least 2 characters.');
    if (!score)           return alert('Please select a score.');
    if (text.length < 20) return alert('Review must be at least 20 characters.');

    saveReview(gameId, { user: name, score: +score, text });
    incrementReviewCount();

    const saved = getReviews(gameId);
    const card = buildReviewCard(name, score, 'Just now', text, 0);
    const stored = document.getElementById('storedReviewsArea');

    if (!stored.querySelector('.group-header')) {
      stored.innerHTML = `<div class="group-header community-header">
        <h4 class="group-title">Community Reviews</h4></div>`;
    }
    stored.appendChild(card);

    document.getElementById('reviewScore').value = '';
    document.getElementById('reviewText').value  = '';
    btn.textContent = 'Submitted!';
    setTimeout(() => { btn.textContent = 'Submit Review'; }, 2000);
  });
}

// Search: related games, recommended games, recommendation cards.
function renderRelated() {
  const container = document.getElementById('relatedContainer');
  if (!container) return;

  const allGames = Object.values(fullGameData).filter(g => g.id !== gameId);

  // Tokenise genre and platform strings for comparison
  const currentGenres    = (game.genre     || '').toLowerCase().split(/[,\s]+/).filter(Boolean);
  const currentPlatforms = (game.platforms || '').toLowerCase().split(/[,\s]+/).filter(Boolean);

  const scored = allGames.map(g => {
    let sim = 0;
    const gGenres    = (g.genre     || '').toLowerCase();
    const gPlatforms = (g.platforms || '').toLowerCase();

    // Genre match is the strongest signal (+3 per token)
    currentGenres.forEach(gn => { if (gn.length > 2 && gGenres.includes(gn)) sim += 3; });
    // Platform overlap is secondary (+1 per token)
    currentPlatforms.forEach(pl => { if (pl.length > 1 && gPlatforms.includes(pl)) sim += 1; });
    // Use metaScore as tiebreaker bonus (normalised to 0-1)
    sim += (g.metaScore || 0) / 200;

    return { g, sim };
  });

  scored.sort((a, b) => b.sim - a.sim);
  const pool = scored.slice(0, 3).map(s => s.g);

  // Ensure cover path is absolute and platforms is an array for createGameCard
  container.innerHTML = '';
  pool.forEach(g => {
    const platforms = typeof g.platforms === 'string'
      ? g.platforms.split(', ').map(p => p.trim())
      : (g.platforms || []);

    const card = createGameCard({
      id: g.id, title: g.title,
      cover: g.cover,
      rating: g.metaScore,
      genre: g.genre,
      year: g.year,
      platforms
    });
    container.appendChild(card);
  });

  initScrollReveal();
}

// --- BOOT ---
document.addEventListener('DOMContentLoaded', () => {
  openViewer = initReviewViewer();
  initPageTransitions();
  initBackToTop();
  initLiveClock();
  initTheme();
  initNavbar();
  initWishlistBtn();
  syncWishlistCount();
  renderHero();
  renderTrailer();
  renderMeta();
  renderCritics();
  renderUserReviews();
  initSubmitReview();
  renderRelated();
});
