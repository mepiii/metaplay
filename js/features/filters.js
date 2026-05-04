// Search: filter feature. Filters games by platform, genre, search text, and sort order.

import { gameList } from '../core/data.js';
import { createGameCard, renderSkeletons } from '../components/gameCard.js';
import { initScrollReveal } from '../core/app.js';
import { scoreClass } from '../core/utils.js';
import { getWishlist, toggleWishlist } from '../features/wishlist.js';
import { syncWishlistCount } from '../components/navbar.js';

// Search: active filter state.
let state = {
  platform: 'All',
  genre:    'All',
  sort:     'rating',
  search:   ''
};

// Search: initialize filters and render game list.
export function initFilters(gridId, options = {}) {
  const grid    = document.getElementById(gridId);
  const mode    = options.mode || 'grid';
  const defSort = options.defaultSort || 'rating';

  if (!grid) return;

  // Search: default sort order.
  state.sort = defSort;
  const sortEl = document.getElementById('filterSort');
  if (sortEl) sortEl.value = defSort;

  // Search: platform filter tabs.
  document.querySelectorAll('.tab[data-platform]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab[data-platform]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.platform = btn.dataset.platform;
      render(grid, mode);
    });
  });

  // Search: genre filter select.
  const genreSelect = document.getElementById('genreSelect');
  if (genreSelect) {
    genreSelect.addEventListener('change', () => {
      state.genre = genreSelect.value;
      render(grid, mode);
    });
  }

  // Search: sort filter select.
  const sortSelect = document.getElementById('filterSort');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      state.sort = sortSelect.value;
      render(grid, mode);
    });
  }

  // Search: inline search filter.
  const filterSearch = document.getElementById('filterSearch');
  if (filterSearch) {
    filterSearch.addEventListener('input', () => {
      state.search = filterSearch.value.toLowerCase().trim();
      render(grid, mode);
    });
  }

  // Search: reset filters button.
  const resetBtn = document.getElementById('resetBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      state = { platform: 'All', genre: 'All', sort: defSort, search: '' };
      document.querySelectorAll('.tab[data-platform]').forEach(b => {
        b.classList.toggle('active', b.dataset.platform === 'All');
      });
      if (genreSelect)   genreSelect.value   = 'All';
      if (sortSelect)    sortSelect.value    = defSort;
      if (filterSearch)  filterSearch.value  = '';
      render(grid, mode);
    });
  }

  // --- Initial render ---
  if (mode === 'grid') renderSkeletons(grid, 8);
  setTimeout(() => render(grid, mode), mode === 'grid' ? 350 : 0);
}

// --- Filter + sort helper ---
function applyFilters(list) {
  if (state.platform !== 'All') {
    list = list.filter(g =>
      g.platforms.some(p => p.toLowerCase().includes(state.platform.toLowerCase()))
    );
  }
  if (state.genre !== 'All') {
    list = list.filter(g => g.genre?.toLowerCase().includes(state.genre.toLowerCase()));
  }
  if (state.search) {
    list = list.filter(g => g.title.toLowerCase().includes(state.search));
  }
  if (state.sort === 'rating')  list.sort((a, b) => b.rating - a.rating);
  if (state.sort === 'newest')  list.sort((a, b) => b.year   - a.year);
  if (state.sort === 'oldest')  list.sort((a, b) => a.year   - b.year);
  if (state.sort === 'alpha')   list.sort((a, b) => a.title.localeCompare(b.title));
  return list;
}

// --- Update result count label ---
function updateCount(list) {
  const el = document.getElementById('activeFilterCount');
  if (el) el.textContent = `(${list.length} game${list.length !== 1 ? 's' : ''})`;
}

// --- Dispatch to correct renderer ---
function render(grid, mode) {
  if (mode === 'list') renderList(grid);
  else                  renderGrid(grid);
}

// --- CARD GRID MODE (search.html) ---
function renderGrid(grid) {
  const list = applyFilters([...gameList]);
  updateCount(list);
  grid.innerHTML = '';

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="empty-icon">🎮</div>
        <h3 class="empty-title">No games found</h3>
        <p class="empty-text">Try changing your filters.</p>
      </div>`;
    return;
  }

  list.forEach(g => grid.appendChild(createGameCard(g)));
  initScrollReveal();
}

// --- LIST MODE (games.html) ---
// Each row: thumbnail 120×70 | title + meta | score | View button
function renderList(container) {
  const list = applyFilters([...gameList]);
  updateCount(list);
  container.innerHTML = '';

  // Switch to list class
  container.className = 'game-list';

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🎮</div>
        <h3 class="empty-title">No games found</h3>
        <p class="empty-text">Try changing your filters.</p>
      </div>`;
    return;
  }

  list.forEach(g => {
    const cls   = scoreClass(g.rating);
    const plats = Array.isArray(g.platforms)
      ? g.platforms.slice(0, 3).join(', ')
      : g.platforms;
    const fallback = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=200&q=60';
    const imgSrc   = g.cover || fallback;

    const wl = getWishlist();
    const isWished = wl.includes(g.id);
    const row = document.createElement('div');
    row.className = 'game-list-item';
    row.innerHTML = `
      <div class="list-thumb">
        <img src="${imgSrc}" alt="${g.title}" loading="lazy"
          onerror="this.onerror=null;this.src='${fallback}'">
      </div>
      <div class="list-info">
        <div class="list-title"><a href="game.html?id=${g.id}">${g.title}</a></div>
        <div class="list-meta">
          <span class="meta-tag">🎮 ${g.genre || '-'}</span>
          <span class="meta-tag">📅 ${g.year || '-'}</span>
          <span class="meta-tag">🖥 ${plats}</span>
        </div>
      </div>
      <div class="list-score ${cls}">${g.rating}</div>
      <button class="list-wishlist-btn${isWished ? ' active' : ''}" data-id="${g.id}" title="Add to Wishlist">${isWished ? '♥' : '♡'}</button>
      <a class="list-btn" href="game.html?id=${g.id}">View →</a>
    `;

    // Wishlist toggle handler
    const wBtn = row.querySelector('.list-wishlist-btn');
    wBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleWishlist(g.id);
      const nowWished = getWishlist().includes(g.id);
      wBtn.classList.toggle('active', nowWished);
      wBtn.textContent = nowWished ? '♥' : '♡';
      syncWishlistCount();
    });

    container.appendChild(row);
  });
}
