// Search: profile page script. Shows account info, profile photo, wishlist count, and user reviews.

import { fullGameData } from '../core/data.js';
import { initPageTransitions, initBackToTop, initLiveClock } from '../core/app.js';
import { initTheme } from '../core/theme.js';
import { initNavbar, syncWishlistCount } from '../components/navbar.js';
import { initWishlistBtn, getWishlist } from '../features/wishlist.js';
import { getSession, logout, updatePhoto, changeUsername } from '../core/auth.js';
import { formatDate, scoreClass } from '../core/utils.js';
import { getReviews, deleteReviewByUser } from '../features/reviews.js';

let currentUser = null;

function renderProfile() {
  currentUser = getSession();
  if (!currentUser) { window.location.href = 'login.html'; return; }

  // Search: profile photo avatar.
  const avatar = document.getElementById('profileAvatar');
  if (avatar) {
    if (currentUser.photo) {
      avatar.style.backgroundImage = `url(${currentUser.photo})`;
      avatar.textContent = '';
    } else {
      avatar.textContent = currentUser.username.charAt(0).toUpperCase();
    }
  }

  // Search: profile user info.
  document.getElementById('profileName').textContent = currentUser.username;
  const sinceEl = document.getElementById('profileSince');
  if (sinceEl) sinceEl.textContent = `Joined ${formatDate(currentUser.joinDate)}`;

  // Search: profile review count.
  let totalReviews = 0;
  for (const key of Object.keys(fullGameData)) {
    const stored = getReviews(key);
    totalReviews += stored.filter(r => r.user === currentUser.username).length;
  }
  const rvCount = document.getElementById('profileReviewCount');
  if (rvCount) rvCount.textContent = totalReviews;

  // Search: profile wishlist count.
  const wl = getWishlist();
  const wlCount = document.getElementById('profileWishlistCount');
  if (wlCount) wlCount.textContent = wl.length;

  renderUserReviews();
}

function renderUserReviews() {
  const container = document.getElementById('profileReviews');
  if (!container) return;

  const reviews = [];
  for (const [id, game] of Object.entries(fullGameData)) {
    const stored = getReviews(id);
    stored.forEach((r, idx) => {
      if (r.user === currentUser.username) {
        reviews.push({ ...r, gameId: id, gameTitle: game.title, storedIdx: idx });
      }
    });
  }

  if (reviews.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📝</div>
        <h3 class="empty-title">No reviews yet</h3>
        <p class="empty-text">Start exploring and share your thoughts!</p>
        <a href="games.html" class="btn btn-primary">Browse Games</a>
      </div>`;
    return;
  }

  reviews.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

  container.innerHTML = '';
  reviews.forEach(r => {
    const cls = scoreClass(r.score);
    const card = document.createElement('div');
    card.className = 'profile-review-card';
    card.dataset.gameId = r.gameId;
    card.dataset.idx    = r.storedIdx;

    // Search: profile avatar with photo.
    const avatarHtml = currentUser.photo
      ? `<div class="reviewer-avatar photo-avatar" style="background-image:url('${currentUser.photo}');"></div>`
      : `<div class="reviewer-avatar ${cls}">${currentUser.username.charAt(0).toUpperCase()}</div>`;

    card.innerHTML = `
      <div class="profile-review-game">
        <a href="game.html?id=${r.gameId}">${r.gameTitle}</a>
      </div>
      <div class="review-card-header">
        <div class="reviewer-info">
          ${avatarHtml}
          <div>
            <div class="reviewer-name">${r.user}</div>
            <div class="reviewer-date">${formatDate(r.date)}</div>
          </div>
        </div>
        <div class="review-actions">
          <div class="review-score ${cls}">${r.score}/10</div>
          <button class="delete-review-btn">Delete</button>
        </div>
      </div>
      <p class="review-text">${r.text}</p>
    `;

    card.querySelector('.delete-review-btn').addEventListener('click', () => {
      if (!confirm('Delete this review?')) return;
      const deleted = deleteReviewByUser(r.gameId, currentUser.username, r.storedIdx);
      if (deleted) {
        card.style.opacity = '0';
        card.style.transition = '.3s';
        setTimeout(() => {
          card.remove();
          // Search: recount profile stats after delete.
          const countEl = document.getElementById('profileReviewCount');
          if (countEl) countEl.textContent = Math.max(0, parseInt(countEl.textContent) - 1);
        }, 300);
      }
    });

    container.appendChild(card);
  });
}

// Search: upload profile photo.
function initPhotoUpload() {
  const input   = document.getElementById('photoUploadInput');
  const preview = document.getElementById('profileAvatar');
  if (!preview || !input) return;

  preview.addEventListener('click', () => input.click());
  input.addEventListener('change', () => {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      updatePhoto(e.target.result);
      preview.style.backgroundImage = `url(${e.target.result})`;
      preview.textContent = '';
    };
    reader.readAsDataURL(file);
  });
}

// Search: change username form.
function initUsernameEdit() {
  const nameEl   = document.getElementById('profileName');
  const editArea = document.getElementById('editUsernameArea');
  const editBtn  = document.getElementById('editUsernameToggle');
  if (!editBtn || !editArea || !nameEl) return;

  editBtn.addEventListener('click', () => {
    const isOpen = editArea.style.display !== 'none';
    editArea.style.display = isOpen ? 'none' : 'flex';
    editBtn.textContent = isOpen ? 'Edit Username' : 'Cancel';
    if (!isOpen) {
      document.getElementById('newUsernameInput').value = currentUser.username;
    }
  });

  document.getElementById('saveUsernameBtn')?.addEventListener('click', () => {
    const newName = document.getElementById('newUsernameInput').value.trim();
    const result  = changeUsername(newName);
    const errorEl = document.getElementById('usernameError');

    if (!result.ok) {
      if (errorEl) { errorEl.textContent = result.error; errorEl.style.display = 'block'; }
      return;
    }

    // Search: username change success message.
    currentUser = getSession();
    nameEl.textContent = newName;
    editArea.style.display = 'none';
    editBtn.textContent = 'Edit Username';
    if (errorEl) errorEl.style.display = 'none';
  });
}

// Search: profile page boot setup.
document.addEventListener('DOMContentLoaded', () => {
  initPageTransitions();
  initBackToTop();
  initLiveClock();
  initTheme();
  initNavbar();
  initWishlistBtn();
  syncWishlistCount();
  renderProfile();
  initPhotoUpload();
  initUsernameEdit();

  document.getElementById('logoutBtn')?.addEventListener('click', logout);
});
