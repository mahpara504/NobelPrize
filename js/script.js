/* ============================================================
   NOBEL PRIZE WINNERS — UNIVERSITY E-PROJECT
   script.js | Vanilla JavaScript — No frameworks
   ============================================================ */

'use strict';

/* ── Helpers ── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ============================================================
   PAGE TRANSITION
   ============================================================ */
(function pageTransitions() {
  const overlay = document.getElementById('page-overlay');
  if (!overlay) return;

  // Fade in on load
  window.addEventListener('load', () => {
    overlay.classList.remove('active');
  });

  // Fade out on nav click
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    // Skip anchors, external, mailto, download links
    if (!href || href.startsWith('#') || href.startsWith('http') ||
        href.startsWith('mailto') || link.hasAttribute('download')) return;

    e.preventDefault();
    overlay.classList.add('active');
    setTimeout(() => { window.location.href = href; }, 420);
  });
})();

/* ============================================================
   NAVIGATION — scroll class + hamburger
   ============================================================ */
(function navbar() {
  const nav = $('.navbar');
  if (!nav) return;

  // Scrolled class
  const handleScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Hamburger
  const btn = $('.hamburger');
  const mobileNav = $('.mobile-nav');
  if (btn && mobileNav) {
    btn.addEventListener('click', () => {
      const open = btn.classList.toggle('open');
      mobileNav.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open);
    });
  }

  // Active link highlight
  const path = window.location.pathname.split('/').pop() || 'index.html';
  $$('.nav-links a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
})();

/* ============================================================
   SCROLL REVEAL ANIMATIONS
   ============================================================ */
(function scrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  $$('.reveal, .reveal-left, .reveal-right, .stagger')
    .forEach(el => observer.observe(el));
})();

/* ============================================================
   PARTICLES (Hero)
   ============================================================ */
(function particles() {
  const container = $('.hero-particles');
  if (!container) return;

  const count = 20;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      bottom: ${Math.random() * 20}%;
      width: ${2 + Math.random() * 4}px;
      height: ${2 + Math.random() * 4}px;
      animation-delay: ${Math.random() * 6}s;
      animation-duration: ${5 + Math.random() * 5}s;
      opacity: ${0.3 + Math.random() * 0.5};
    `;
    container.appendChild(p);
  }
})();

/* ============================================================
   STARS (Video fallback background)
   ============================================================ */
(function stars() {
  const container = $('.stars');
  if (!container) return;
  for (let i = 0; i < 80; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = .5 + Math.random() * 2.5;
    s.style.cssText = `
      left: ${Math.random() * 100}%;
      top:  ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size}px;
      animation-delay: ${Math.random() * 3}s;
      animation-duration: ${2 + Math.random() * 3}s;
    `;
    container.appendChild(s);
  }
})();

/* ============================================================
   BACK TO TOP BUTTON
   ============================================================ */
(function backToTop() {
  const btn = $('.back-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ============================================================
   GALLERY LIGHTBOX
   ============================================================ */
(function lightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  const lbImg = lb.querySelector('img');
  const lbClose = lb.querySelector('.lightbox-close');

  $$('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (!img) return;
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLB = () => {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  };
  lbClose?.addEventListener('click', closeLB);
  lb.addEventListener('click', e => { if (e.target === lb) closeLB(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLB(); });
})();

/* ============================================================
   CONTACT FORM
   ============================================================ */
(function contactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sending…';

    // Simulate sending delay
    await new Promise(r => setTimeout(r, 1400));

    form.style.display = 'none';
    const success = document.getElementById('form-success');
    if (success) success.classList.add('show');
    showToast('✅', 'Message Sent!', 'Thank you — we\'ll be in touch soon.');
  });
})();

/* ============================================================
   DOWNLOAD TRACKING + TOAST
   ============================================================ */
(function downloads() {
  $$('[data-download]').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.download;
      showToast('📥', 'Download Started', `${name} is downloading…`);
    });
  });
})();

/* ============================================================
   TOAST HELPER
   ============================================================ */
function showToast(icon, title, message) {
  // Remove existing
  $$('.toast').forEach(t => t.remove());

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <div class="toast-text">
      <strong>${title}</strong>${message}
    </div>
  `;
  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('show'));
  });
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

/* ============================================================
   COUNTING ANIMATION (stats)
   ============================================================ */
(function countUp() {
  const nums = $$('[data-count]');
  if (!nums.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.dataset.count;
      const duration = 1600;
      const start = performance.now();
      const tick = now => {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(ease * target);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  nums.forEach(n => observer.observe(n));
})();

/* ============================================================
   VIDEO PLAYER (home page)
   ============================================================ */
(function videoPlayer() {
  const video = document.getElementById('hero-video');
  const playBtn = document.getElementById('play-hero-video');
  if (!video || !playBtn) return;

  playBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playBtn.innerHTML = '⏸';
      playBtn.title = 'Pause';
    } else {
      video.pause();
      playBtn.innerHTML = '▶';
      playBtn.title = 'Play';
    }
  });
})();

/* ============================================================
   SMOOTH ANCHOR SCROLL
   ============================================================ */
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const target = document.querySelector(a.getAttribute('href'));
  if (!target) return;
  e.preventDefault();
  const offset = 80; // navbar height
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
});

/* ============================================================
   CURRENT YEAR IN FOOTER
   ============================================================ */
$$('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});
