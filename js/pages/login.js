// Search: login page script. Handles login form and redirects logged in users.

import { initTheme } from '../core/theme.js';
import { login, getSession } from '../core/auth.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  // Search: redirect logged in user to profile page.
  if (getSession()) { window.location.href = 'profile.html'; return; }

  const form     = document.getElementById('loginForm');
  const errorEl  = document.getElementById('loginError');
  const submitBtn = document.getElementById('loginSubmit');

  form?.addEventListener('submit', e => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;

    submitBtn.textContent = 'Logging in…';
    submitBtn.disabled = true;

    setTimeout(() => {
      const result = login({ username, password });
      if (result.ok) {
        window.location.href = 'profile.html';
      } else {
        errorEl.textContent = result.error;
        errorEl.style.display = 'block';
        submitBtn.textContent = 'Log In';
        submitBtn.disabled = false;
      }
    }, 400);
  });
});
