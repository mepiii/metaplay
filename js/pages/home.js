// Search: home page script. Builds trending, top rated, game of the week, and homepage stats.

import { gameList, fullGameData } from '../core/data.js';
import { initIntro, initPageTransitions, initBackToTop, initLiveClock, initScrollReveal } from '../core/app.js';
import { initTheme } from '../core/theme.js';
import { initNavbar, syncWishlistCount } from '../components/navbar.js';
import { createGameCard, renderSkeletons } from '../components/gameCard.js';
import { initFilters } from '../features/filters.js';
import { initWishlistBtn } from '../features/wishlist.js';
import { scoreClass } from '../core/utils.js';

// Search: top rated games section.
function renderTopRated() {
  const grid = document.getElementById('topRatedGrid');
  if (!grid) return;

  renderSkeletons(grid, 4);

  // Search: top rated shows four highest score games.
  const top5 = [...gameList].sort((a, b) => b.rating - a.rating).slice(0, 4);

  setTimeout(() => {
    grid.innerHTML = '';
    top5.forEach(g => grid.appendChild(createGameCard(g)));
    initScrollReveal();
  }, 350);
}

// Search: trending games section.
function renderTrending() {
  const grid = document.getElementById('trendingGrid');
  if (!grid) return;

  renderSkeletons(grid, 4);

  const pool = [...gameList]
    .filter(g => g.rating >= 85)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  setTimeout(() => {
    grid.innerHTML = '';
    pool.forEach(g => grid.appendChild(createGameCard(g)));
    initScrollReveal();
  }, 500);
}

// Search: game of the week section.
function renderGameOfWeek() {
  const container = document.getElementById('gotwCard');
  if (!container) return;

  const games = Object.values(fullGameData);
  const gotw  = games.sort((a, b) => b.metaScore - a.metaScore)[0];
  const cls   = scoreClass(gotw.metaScore);
  const platforms = gotw.platforms.split(', ').slice(0, 3).join(', ');

  container.innerHTML = `
    <div class="gotw-cover">
      <img src="${gotw.cover}" alt="${gotw.title}" loading="lazy">
    </div>
    <div class="gotw-info">
      <span class="gotw-badge">Game of the Week</span>
      <h3 class="gotw-title">${gotw.title}</h3>
      <div class="gotw-meta">
        <div class="gotw-meta-item">Genre: <span>${gotw.genre}</span></div>
        <div class="gotw-meta-item">Dev: <span>${gotw.developer}</span></div>
        <div class="gotw-meta-item">Platforms: <span>${platforms}</span></div>
      </div>
      <p class="gotw-desc">${gotw.summary}</p>
      <div class="gotw-actions">
        <div class="gotw-score ${cls}">${gotw.metaScore}<small>/100</small></div>
        <a href="game.html?id=${gotw.id}" class="btn btn-primary">View Details</a>
      </div>
    </div>
  `;
}

// Search: homepage stats numbers.
function updateDynamicStats() {
  // Search: homepage game count.
  const heroTotal = document.getElementById('heroTotal');
  if (heroTotal) heroTotal.textContent = gameList.length;

  // Search: homepage platform count.
  const platformSet = new Set();
  gameList.forEach(g => {
    g.platforms.forEach(p => {
      const name = p.trim().toLowerCase();
      if (name) platformSet.add(name);
    });
  });
  const platformCountEl = document.querySelector('.hero-stats .stat:nth-child(2) .stat-num');
  if (platformCountEl) platformCountEl.textContent = platformSet.size;

  // Search: homepage review count.
  let reviewTotal = 0;
  for (const game of Object.values(fullGameData)) {
    reviewTotal += (game.criticReviews || []).length;
    reviewTotal += (game.defaultUserReviews || []).length;
  }
  // Search: count stored user reviews from localStorage.
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('mp_reviews_')) {
      try {
        const stored = JSON.parse(localStorage.getItem(key) || '[]');
        reviewTotal += stored.length;
      } catch {}
    }
  }
  const reviewsEl = document.querySelector('.hero-stats .stat:nth-child(3) .stat-num');
  if (reviewsEl) {
    reviewsEl.textContent = reviewTotal >= 1000
      ? Math.round(reviewTotal / 1000) + 'k+'
      : reviewTotal;
  }

  // Search: homepage game count. di menu platform
  const platforms = {
    'PC': 'pcCount', 'PS5': 'ps5Count', 'PS4': 'ps4Count',
    'Xbox Series X/S': 'xboxsCount', 'Xbox One': 'xboxCount', 'Switch': 'switchCount'
  };
  for (const [platform, id] of Object.entries(platforms)) {
    const count = gameList.filter(g =>
      g.platforms.some(p => p.trim() === platform)
    ).length;
    const el = document.getElementById(id);
    if (el) el.textContent = count;
  }
}

// Search: page boot setup.
document.addEventListener('DOMContentLoaded', () => {
  initIntro();
  initPageTransitions();
  initBackToTop();
  initLiveClock();
  initTheme();
  initNavbar();
  initWishlistBtn();
  syncWishlistCount();
  renderTopRated();
  renderTrending();
  renderGameOfWeek();
  updateDynamicStats();
  initScrollReveal();
});
