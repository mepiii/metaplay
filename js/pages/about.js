// Search: about page script. Updates project info shown on the about page.

import { gameList } from '../core/data.js';
import { initPageTransitions, initBackToTop, initLiveClock, initScrollReveal } from '../core/app.js';
import { initTheme } from '../core/theme.js';
import { initNavbar } from '../components/navbar.js';

document.addEventListener('DOMContentLoaded', () => {
  initPageTransitions();
  initBackToTop();
  initLiveClock();
  initTheme();
  initNavbar();

  // Search: about page game count.
  const el = document.getElementById('gameCountStat');
  if (el) el.textContent = gameList.length + '+';

  initScrollReveal();
});
