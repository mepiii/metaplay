// Search: game card component. Builds the reusable game card used on home, search, games, and wishlist pages.

import { scoreClass } from '../core/utils.js';
import { getWishlist, toggleWishlist } from '../features/wishlist.js';
import { syncWishlistCount } from './navbar.js';

// Search: fallback cover image when game cover is missing.
const FALLBACK = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=70';

// Search: create game card element.
export function createGameCard(game) {
  const cls = scoreClass(game.rating);
  const platforms = Array.isArray(game.platforms)
    ? game.platforms
    : game.platforms.split(', ').map(p => p.trim());

  const shown = platforms.slice(0, 3);
  const extra = platforms.length - 3;
  const wishlisted = getWishlist().includes(game.id);

  const card = document.createElement('article');
  card.className = 'game-card reveal';
  card.dataset.id = game.id;

  card.innerHTML = `
    <a href="game.html?id=${game.id}" class="card-cover-link">
      <div class="card-cover">
        <img
          src="${game.cover}"
          alt="${game.title}"
          loading="lazy"
          onerror="this.onerror=null;this.src='${FALLBACK}'">
        <div class="card-score ${cls}">${game.rating}</div>
      </div>
    </a>
    <div class="card-body">
      <div class="card-top">
        <h3 class="card-title">
          <a href="game.html?id=${game.id}">${game.title}</a>
        </h3>
        <button
          class="wishlist-toggle ${wishlisted ? 'active' : ''}"
          data-id="${game.id}"
          aria-label="Wishlist"
        >${wishlisted ? '♥' : '♡'}</button>
      </div>
      <div class="card-meta">
        ${game.genre ? `<span class="card-genre">${game.genre.split(',')[0].trim()}</span>` : ''}
        ${game.year  ? `<span class="card-year">${game.year}</span>` : ''}
      </div>
      <div class="card-platforms">
        ${shown.map(p => `<span class="ptag">${p}</span>`).join('')}
        ${extra > 0 ? `<span class="ptag">+${extra}</span>` : ''}
      </div>
      <a href="game.html?id=${game.id}" class="card-cta">View Details</a>
    </div>
  `;

  // Search: wishlist button inside game card.
  card.querySelector('.wishlist-toggle').addEventListener('click', e => {
    e.preventDefault();
    const btn = e.currentTarget;
    const isNow = toggleWishlist(game.id);
    btn.textContent = isNow ? '♥' : '♡';
    btn.classList.toggle('active', isNow);
    syncWishlistCount();
  });

  return card;
}

// Search: skeleton loading cards before game data appears.
export function renderSkeletons(container, count = 6) {
  container.innerHTML = Array(count).fill(`
    <div class="skeleton-card">
      <div class="skeleton sk-cover"></div>
      <div class="sk-body">
        <div class="skeleton sk-line"></div>
        <div class="skeleton sk-line short"></div>
        <div class="skeleton sk-line shorter"></div>
      </div>
    </div>
  `).join('');
}
