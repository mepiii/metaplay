// Search: theme toggle. Switches between dark theme and light theme.

const KEY = 'mp_theme';

export function initTheme() {
  const saved = localStorage.getItem(KEY) || 'dark';
  applyTheme(saved);

  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(KEY, next);
  });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = theme === 'dark' ? '☾' : '☀';

  const vars = theme === 'light'
    ? { '--bg': '#e8edf2', '--card': '#f4f7fa', '--card-2': '#dde4ed', '--text': '#0d1520', '--muted': '#5a7090', '--border': 'rgba(80,125,188,.2)' }
    : { '--bg': '#04080F', '--card': '#08101c', '--card-2': '#0c1828', '--text': '#DAE3E5', '--muted': '#6a8dad', '--border': 'rgba(80,125,188,.18)' };

  for (const [k, v] of Object.entries(vars))
    document.documentElement.style.setProperty(k, v);
}
