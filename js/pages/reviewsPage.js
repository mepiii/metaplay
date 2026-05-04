// Search: reviews page, review page script. Renders all reviews, sorting controls, review count, and full review viewer.

import { gameReviewsData } from '../core/data.js';
import { scoreClass, formatDate } from '../core/utils.js';
import { initPageTransitions, initBackToTop, initLiveClock } from '../core/app.js';
import { initTheme } from '../core/theme.js';
import { initNavbar } from '../components/navbar.js';
import { initReviewViewer } from '../components/reviewViewer.js';
import { getReviews } from '../features/reviews.js';

const params = new URLSearchParams(window.location.search);
const gameId = params.get('id') || 'elden';
const game   = gameReviewsData[gameId] || gameReviewsData.elden;

let currentFilter = 'all';
let openViewer = null;

function allReviews() {
  const stored = getReviews(gameId);
  return [...stored, ...(game.defaultReviews || [])];
}

function renderHeader() {
  document.title = `${game.title} Reviews - MetaPlay`;
  document.getElementById('gameTitle').textContent = `${game.title} - Reviews`;

  document.getElementById('breadcrumb').innerHTML = `
    <a href="index.html">Home</a> /
    <a href="game.html?id=${game.id}">${game.title}</a> /
    <span>Reviews</span>
  `;
  document.getElementById('backButton').href       = `game.html?id=${game.id}`;
  document.getElementById('writeReviewLink').href  = `game.html?id=${game.id}`;

  const cls = scoreClass(game.metaScore);
  document.getElementById('metaBadge').innerHTML = `
    <span class="meta-label-small">Metascore</span>
    <span class="badge-score ${cls}">${game.metaScore}</span>
  `;
}

function buildCard(review) {
  const cls    = scoreClass(review.score);
  const letter = String(review.user || 'U').charAt(0).toUpperCase();
  const card = document.createElement('div');
  card.className = 'review-card';
  card.innerHTML = `
    <div class="review-card-header">
      <div class="reviewer-info">
        <div class="reviewer-avatar ${cls}">${letter}</div>
        <div>
          <div class="reviewer-name"></div>
          <div class="reviewer-date"></div>
        </div>
      </div>
      <div class="review-score ${cls}"></div>
    </div>
    <p class="review-text"></p>
    <div class="review-card-footer">
      <span>Verified Player</span>
      <button class="expand-btn" type="button">Read Full Review →</button>
    </div>
  `;

  card.querySelector('.reviewer-name').textContent = review.user;
  card.querySelector('.reviewer-date').textContent = formatDate(review.date);
  card.querySelector('.review-score').textContent = `${review.score}/10`;
  card.querySelector('.review-text').textContent = review.text;

  const expandBtn = card.querySelector('.expand-btn');
  expandBtn.dataset.source = review.user;
  expandBtn.dataset.score = review.score;
  expandBtn.dataset.date = formatDate(review.date);
  expandBtn.dataset.text = review.text;
  expandBtn.addEventListener('click', e => openViewer?.(e.currentTarget));

  return card;
}

function renderReviews() {
  const sortType = document.getElementById('sortSelect')?.value || 'newest';
  let list = allReviews();

  if (currentFilter === 'positive') list = list.filter(r => r.score >= 7);
  if (currentFilter === 'negative') list = list.filter(r => r.score < 7);

  if (sortType === 'newest')  list.sort((a, b) => new Date(b.date||0) - new Date(a.date||0));
  if (sortType === 'highest') list.sort((a, b) => b.score - a.score);
  if (sortType === 'lowest')  list.sort((a, b) => a.score - b.score);

  const container = document.getElementById('reviewsList');
  const empty     = document.getElementById('emptyState');

  document.getElementById('reviewCount').textContent =
    `${list.length} ${list.length === 1 ? 'review' : 'reviews'}`;

  if (list.length === 0) {
    container.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  container.innerHTML = '';
  list.forEach(review => container.appendChild(buildCard(review)));
}

document.addEventListener('DOMContentLoaded', () => {
  initPageTransitions();
  initBackToTop();
  initLiveClock();
  initTheme();
  initNavbar();
  openViewer = initReviewViewer();
  renderHeader();
  renderReviews();

  document.getElementById('sortSelect')?.addEventListener('change', renderReviews);

  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderReviews();
    });
  });
});
