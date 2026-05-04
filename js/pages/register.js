// Search: register page script. Handles account creation and optional profile photo.

import { initTheme } from '../core/theme.js';
import { register, getSession } from '../core/auth.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  if (getSession()) { window.location.href = 'profile.html'; return; }

  let photoDataUrl = '';

  // Search: profile photo preview before register.
  const photoInput   = document.getElementById('regPhotoInput');
  const photoPreview = document.getElementById('regPhotoPreview');

  photoPreview?.addEventListener('click', () => photoInput?.click());
  photoInput?.addEventListener('change', () => {
    const file = photoInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      photoDataUrl = e.target.result;
      photoPreview.style.backgroundImage = `url(${photoDataUrl})`;
      photoPreview.textContent = '';
    };
    reader.readAsDataURL(file);
  });

  const form      = document.getElementById('registerForm');
  const errorEl   = document.getElementById('registerError');
  const submitBtn = document.getElementById('registerSubmit');

  form?.addEventListener('submit', e => {
    e.preventDefault();
    const username = document.getElementById('regUsername').value.trim();
    const password = document.getElementById('regPassword').value;
    const confirm  = document.getElementById('regConfirm').value;

    if (password !== confirm) {
      errorEl.textContent = 'Passwords do not match.';
      errorEl.style.display = 'block';
      return;
    }

    submitBtn.textContent = 'Creating account…';
    submitBtn.disabled = true;

    setTimeout(() => {
      const result = register({ username, password, photo: photoDataUrl });
      if (result.ok) {
        window.location.href = 'profile.html';
      } else {
        errorEl.textContent = result.error;
        errorEl.style.display = 'block';
        submitBtn.textContent = 'Create Account';
        submitBtn.disabled = false;
      }
    }, 400);
  });
});
