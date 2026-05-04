// Search: core app helpers used by many pages.

// Search: intro screen removal. Keeps old intro markup from showing.
export function initIntro() {
  document.getElementById('intro-screen')?.remove();
}

// Search: page transition removal. Keeps navigation instant.
export function initPageTransitions() {
  document.getElementById('page-transition')?.remove();
}

// Search: navigate to another page without animation.
export function navigate(href) {
  window.location.href = href;
}

// Search: back to top button.
export function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Search: live clock in navbar.
export function initLiveClock() {
  const el = document.getElementById('liveTime');
  if (!el) return;

  const tick = () => {
    el.textContent = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit', minute: '2-digit'
    });
  };
  tick();
  setInterval(tick, 1000);
}

// Search: scroll reveal animation for .reveal elements.
export function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  items.forEach(el => io.observe(el));
}


