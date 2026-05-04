// Search: all games page script. Shows game list with platform, genre, sort, and search filters.

import { initPageTransitions, initBackToTop, initLiveClock } from '../core/app.js';
import { initTheme } from '../core/theme.js';
import { initNavbar, syncWishlistCount } from '../components/navbar.js';
import { initFilters } from '../features/filters.js';
import { initWishlistBtn } from '../features/wishlist.js';

document.addEventListener('DOMContentLoaded', () => {
  initPageTransitions();
  initBackToTop();
  initLiveClock();
  initTheme();
  initNavbar();
  initWishlistBtn();
  syncWishlistCount();

  // Search: all games list layout sorted A to Z.
  initFilters('gamesGrid', { mode: 'list', defaultSort: 'alpha' });
});
