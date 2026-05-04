// Search: navbar component. Controls navbar search, platform menu, login/profile links, scroll style, and wishlist count.

import { searchGameList } from '../core/data.js';
import { navigate } from '../core/app.js';
import { getSession } from '../core/auth.js';
import { getWishlist } from '../features/wishlist.js';

// Search: initialize navbar features.
export function initNavbar() {
  initSearch();
  initDropdown();
  initScrollNav();
  syncNavAuth();
  syncWishlistCount();
}

// Search: navbar search suggestions.
function initSearch() {
  const input = document.getElementById('searchField');
  const box   = document.getElementById('suggestionsBox');
  if (!input || !box) return;

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    box.innerHTML = '';

    if (!q) { box.classList.remove('show'); return; }

    const matches = searchGameList
      .filter(g => g.title.toLowerCase().includes(q))
      .slice(0, 5);

    matches.forEach(game => {
      const item = document.createElement('div');
      item.className = 'suggestion-item';

      const cover = document.createElement('img');
      cover.src = game.cover;
      cover.alt = '';

      const title = document.createElement('span');
      title.textContent = game.title;

      item.append(cover, title);
      item.addEventListener('click', () => navigate(`game.html?id=${game.id}`));
      box.appendChild(item);
    });

    if (matches.length) {
      const all = document.createElement('div');
      all.className = 'suggestion-item suggestion-all';

      const label = document.createElement('span');
      label.textContent = `Search all results for "${input.value}"`;

      all.appendChild(label);
      all.addEventListener('click', () =>
        navigate(`search.html?q=${encodeURIComponent(input.value)}`)
      );
      box.appendChild(all);
    }

    box.classList.toggle('show', matches.length > 0);
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && input.value.trim())
      navigate(`search.html?q=${encodeURIComponent(input.value)}`);
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap')) box.classList.remove('show');
  });
}

// Search: platform dropdown menu in navbar.
function initDropdown() {
  const menus = document.querySelectorAll('.platform-menu');
  menus.forEach(menu => {
    const dropdown = menu.querySelector('.platform-dropdown');
    if (!dropdown) return;

    let hideTimer;

    const show = () => {
      clearTimeout(hideTimer);
      dropdown.classList.add('open');
    };
    const hide = () => {
      hideTimer = setTimeout(() => dropdown.classList.remove('open'), 180);
    };

    menu.addEventListener('mouseenter', show);
    menu.addEventListener('mouseleave', hide);
    dropdown.addEventListener('mouseenter', show);
    dropdown.addEventListener('mouseleave', hide);
  });
}

// Search: navbar scroll effect.
function initScrollNav() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Search: navbar auth state, login link, profile link.
function syncNavAuth() {
  const user = getSession();
  const loginLink  = document.getElementById('navLoginLink');
  const profileWrap = document.getElementById('navProfile');

  if (loginLink)  loginLink.style.display  = user ? 'none' : '';
  if (profileWrap) profileWrap.style.display = user ? '' : 'none';

  if (user && profileWrap) {
    const avatar = profileWrap.querySelector('.nav-avatar');
    if (avatar) {
      if (user.photo) {
        avatar.style.backgroundImage = `url(${user.photo})`;
        avatar.textContent = '';
      } else {
        avatar.textContent = user.username.charAt(0).toUpperCase();
      }
    }
    const name = profileWrap.querySelector('.nav-username');
    if (name) name.textContent = user.username;
  }
}

// Search: navbar wishlist count.
export function syncWishlistCount() {
  document.querySelectorAll('.wishlist-count').forEach(el => {
    el.textContent = getWishlist().length;
  });
}
