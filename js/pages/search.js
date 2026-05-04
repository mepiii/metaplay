// Search: search page script. Shows search results with platform, genre, sort, and text filters.

import { gameList } from '../core/data.js';
import { initPageTransitions, initBackToTop, initLiveClock, initScrollReveal } from '../core/app.js';
import { initTheme } from '../core/theme.js';
import { initNavbar, syncWishlistCount } from '../components/navbar.js';
import { createGameCard } from '../components/gameCard.js';
import { initWishlistBtn } from '../features/wishlist.js';

const params = new URLSearchParams(window.location.search);
const rawQ   = params.get('q') || '';
const q      = rawQ.toLowerCase().trim();

// Search: search page filter state.
let state = { platform: 'All', genre: 'All', sort: 'rating' };

function getBaseResults() {
  return q ? gameList.filter(g => g.title.toLowerCase().includes(q)) : [...gameList];
}

function applyFilters(list) {
  let filtered = [...list];

  if (state.platform !== 'All') {
    filtered = filtered.filter(g =>
      g.platforms.some(p => p.toLowerCase().includes(state.platform.toLowerCase()))
    );
  }
  if (state.genre !== 'All') {
    filtered = filtered.filter(g =>
      g.genre?.toLowerCase().includes(state.genre.toLowerCase())
    );
  }

  if (state.sort === 'rating')  filtered.sort((a, b) => b.rating - a.rating);
  if (state.sort === 'newest')  filtered.sort((a, b) => b.year - a.year);
  if (state.sort === 'oldest')  filtered.sort((a, b) => a.year - b.year);
  if (state.sort === 'alpha')   filtered.sort((a, b) => a.title.localeCompare(b.title));

  return filtered;
}

function render() {
  const base    = getBaseResults();
  const results = applyFilters(base);
  const container = document.getElementById('searchResultsContainer');
  const countEl   = document.getElementById('activeFilterCount');

  if (countEl) countEl.textContent = `${results.length} result${results.length !== 1 ? 's' : ''}`;

  // Search: update search result count.
  document.getElementById('resultCount').textContent =
    `(${results.length} result${results.length !== 1 ? 's' : ''})`;

  container.innerHTML = '';

  if (results.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="empty-icon">🔍</div>
        <h3 class="empty-title">No results found</h3>
        <p class="empty-text">Try different filters or search term.</p>
        <a href="games.html" class="btn btn-primary">Browse All Games</a>
      </div>`;
    return;
  }

  results.forEach(g => container.appendChild(createGameCard(g)));
  initScrollReveal();
}

function initSearchFilters() {
  // Search: platform filter tabs.
  document.querySelectorAll('.tab[data-platform]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab[data-platform]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.platform = btn.dataset.platform;
      render();
    });
  });

  // Search: genre filter select.
  document.getElementById('searchGenre')?.addEventListener('change', e => {
    state.genre = e.target.value;
    render();
  });

  // Search: sort filter select.
  document.getElementById('searchSort')?.addEventListener('change', e => {
    state.sort = e.target.value;
    render();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initPageTransitions();
  initBackToTop();
  initLiveClock();
  initTheme();
  initNavbar();
  initWishlistBtn();
  syncWishlistCount();

  // Search: show current search keyword.
  document.getElementById('searchQuery').textContent = rawQ ? `"${rawQ}"` : '';
  const field = document.getElementById('searchField');
  if (field) field.value = rawQ;

  initSearchFilters();
  render();
});
