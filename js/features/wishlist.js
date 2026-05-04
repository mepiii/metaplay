// Search: wishlist feature. Stores saved game IDs in localStorage.

const KEY = 'mp_wishlist';

export function getWishlist() {
  return JSON.parse(localStorage.getItem(KEY) || '[]');
}

function saveWishlist(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

// Search: toggle wishlist item on or off.
export function toggleWishlist(gameId) {
  const list = getWishlist();
  const idx  = list.indexOf(gameId);
  if (idx === -1) {
    list.push(gameId);
    saveWishlist(list);
    return true;
  }
  list.splice(idx, 1);
  saveWishlist(list);
  return false;
}

export function removeFromWishlist(gameId) {
  const list = getWishlist().filter(id => id !== gameId);
  saveWishlist(list);
}

// Search: navbar wishlist button setup.
export function initWishlistBtn() {
  const btn = document.getElementById('wishlistBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.location.href = 'wishlist.html';
  });
}
