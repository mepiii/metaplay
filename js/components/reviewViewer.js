// Search: review viewer panel. Opens full review text in a side panel.

import { scoreClass } from '../core/utils.js';

export function initReviewViewer() {
  const overlay = document.getElementById('reviewViewerOverlay');
  if (!overlay) return null;

  const closeBtn = document.getElementById('closeViewerBtn');

  function open(btn) {
    const score = btn.dataset.score;
    const cls   = scoreClass(score);

    overlay.querySelector('.viewer-score').textContent  = score;
    overlay.querySelector('.viewer-score').className    = `viewer-score ${cls}`;
    overlay.querySelector('.viewer-source').textContent = btn.dataset.source;
    overlay.querySelector('.viewer-date').textContent   = btn.dataset.date;
    overlay.querySelector('.viewer-text').textContent   = btn.dataset.text;

    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  closeBtn?.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  return open;
}
