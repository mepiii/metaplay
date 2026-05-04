// Search: wishlist page script. Renders saved games and remove buttons.

import { gameList } from '../core/data.js';
import { initPageTransitions, initBackToTop, initLiveClock, initScrollReveal } from '../core/app.js';
import { initTheme } from '../core/theme.js';
import { initNavbar, syncWishlistCount } from '../components/navbar.js';
import { createGameCard } from '../components/gameCard.js';
import { getWishlist, removeFromWishlist } from '../features/wishlist.js';
import { initWishlistBtn } from '../features/wishlist.js';

// Search: render wishlist games.
function renderWishlist() {
  const ids    = getWishlist();
  const grid   = document.getElementById('wishlistGrid');
  const countEl = document.getElementById('wishlistTotal');

  // Search: update wishlist count display.
  if (countEl) countEl.textContent = ids.length;
  if (!grid) return;
  grid.innerHTML = '';

  // Search: empty wishlist state.
  if (ids.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="empty-icon">♡</div>
        <h3 class="empty-title">Your wishlist is empty</h3>
        <p class="empty-text">Explore games and save your favorites.</p>
        <a href="games.html" class="btn btn-primary">Browse Games</a>
      </div>`;
    return;
  }

  // Search: render wishlist game cards.
  const games = gameList.filter(g => ids.includes(g.id));

  games.forEach(g => {
    // Search: createGameCard reused for wishlist card.
    const card = createGameCard(g);

    // Search: remove from wishlist button.
    const removeBtn = document.createElement('button');
    removeBtn.textContent = '✕ Remove';
    removeBtn.className   = 'btn btn-danger wishlist-remove-btn';

    removeBtn.addEventListener('click', () => {
      // Search: remove card animation.
      card.style.opacity    = '0';
      card.style.transform  = 'scale(.95)';
      card.style.transition = '.3s ease';

      setTimeout(() => {
        removeFromWishlist(g.id);
        card.remove();
        syncWishlistCount();
        // Search: show empty wishlist after last item removed.
        if (getWishlist().length === 0) renderWishlist();
        const total = document.getElementById('wishlistTotal');
        if (total) total.textContent = getWishlist().length;
      }, 300);
    });

    card.querySelector('.card-body')?.appendChild(removeBtn);
    grid.appendChild(card);
  });

  initScrollReveal();
}

// Search: wishlist page boot setup.
document.addEventListener('DOMContentLoaded', () => {
  initPageTransitions();
  initBackToTop();
  initLiveClock();
  initTheme();
  initNavbar();
  initWishlistBtn();
  syncWishlistCount();
  renderWishlist();
});
