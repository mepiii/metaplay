// Search: utility helpers used across pages.

// Search: score class helper, high mid low score colors.
export function scoreClass(score) {
  const n = parseFloat(score);
  if (n > 10) return n >= 75 ? 'high' : n >= 55 ? 'mid' : 'low';
  return n >= 7.5 ? 'high' : n >= 5.5 ? 'mid' : 'low';
}

// Search: date formatter.
export function formatDate(dateStr) {
  if (!dateStr || dateStr === 'Just now') return dateStr || '';
  try {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    });
  } catch { return dateStr; }
}

// Search: user initial helper for avatar.
export function initial(name) {
  return String(name || 'U').charAt(0).toUpperCase();
}

// Search: debounce helper for search input.
export function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
