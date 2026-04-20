/* ============================================================
   components.js — Shared nav & footer injected at runtime
   ============================================================ */

'use strict';

/* ── Navigation HTML ── */
const NAV_HTML = `
<nav class="navbar" role="navigation" aria-label="Main navigation">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo" aria-label="Nobel Prize Winners Home">
      <div class="logo-medal" aria-hidden="true">🏅</div>
      Nobel<span>Prize</span>
    </a>

    <div class="nav-links" role="menubar">
      <a href="index.html" role="menuitem">Home</a>
      <a href="about.html" role="menuitem">About</a>

      <!-- Scientists Dropdown -->
      <div class="nav-dropdown" role="menuitem" aria-haspopup="true">
        <span class="nav-links a dropdown-toggle" style="
          color:rgba(255,255,255,.8);font-size:.875rem;font-weight:600;
          letter-spacing:.04em;text-transform:uppercase;padding:.5rem .85rem;
          border-radius:6px;cursor:pointer;display:flex;align-items:center;gap:.3rem;
          transition:color .35s,background .35s;
        " tabindex="0"
          onmouseenter="this.style.color='#E8C97A';this.style.background='rgba(201,168,76,.1)'"
          onmouseleave="this.style.color='rgba(255,255,255,.8)';this.style.background=''"
        >
          Scientists
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M2 4l4 4 4-4"/>
          </svg>
        </span>
        <div class="dropdown-menu" role="menu">
          <a href="scientist1.html" role="menuitem"><span class="flag">🇩🇪</span> Albert Einstein</a>
          <a href="scientist2.html" role="menuitem"><span class="flag">🇵🇱</span> Marie Curie</a>
          <a href="scientist3.html" role="menuitem"><span class="flag">🇬🇧</span> Alexander Fleming</a>
          <a href="scientist4.html" role="menuitem"><span class="flag">🇿🇦</span> Nelson Mandela</a>
          <a href="scientist5.html" role="menuitem"><span class="flag">🇺🇸</span> Richard Feynman</a>
        </div>
      </div>

      <a href="gallery.html" role="menuitem">Gallery</a>
      <a href="contact.html" role="menuitem">Contact</a>
    </div>

    <button class="hamburger" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobile-nav">
      <span></span><span></span><span></span>
    </button>
  </div>

  <div class="mobile-nav" id="mobile-nav" role="menu">
    <a href="index.html" role="menuitem">🏠 Home</a>
    <a href="about.html" role="menuitem">ℹ️ About</a>
    <div class="mobile-divider">Scientists</div>
    <a href="scientist1.html" role="menuitem">🇩🇪 Albert Einstein</a>
    <a href="scientist2.html" role="menuitem">🇵🇱 Marie Curie</a>
    <a href="scientist3.html" role="menuitem">🇬🇧 Alexander Fleming</a>
    <a href="scientist4.html" role="menuitem">🇿🇦 Nelson Mandela</a>
    <a href="scientist5.html" role="menuitem">🇺🇸 Richard Feynman</a>
    <a href="gallery.html" role="menuitem">🖼️ Gallery</a>
    <a href="contact.html" role="menuitem">✉️ Contact</a>
  </div>
</nav>`;

/* ── Footer HTML ── */
const FOOTER_HTML = `
<footer role="contentinfo">
  <div class="footer-inner">
    <div class="footer-brand">
      <div class="nav-logo" style="margin-bottom:1rem;">
        <div class="logo-medal">🏅</div>
        Nobel<span>Prize</span>
      </div>
      <p>An educational e-project exploring the lives and achievements of Nobel Prize winning scientists who changed our world forever.</p>
      <div class="social-links" aria-label="Social media links">
        <a href="#" class="social-btn" aria-label="Twitter" title="Twitter">𝕏</a>
        <a href="#" class="social-btn" aria-label="Facebook" title="Facebook">f</a>
        <a href="#" class="social-btn" aria-label="LinkedIn" title="LinkedIn">in</a>
        <a href="#" class="social-btn" aria-label="YouTube" title="YouTube">▶</a>
      </div>
    </div>

    <div class="footer-col">
      <h5>Navigation</h5>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Nobel Prize</a></li>
        <li><a href="gallery.html">Gallery & Media</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Scientists</h5>
      <ul>
        <li><a href="scientist1.html">Albert Einstein</a></li>
        <li><a href="scientist2.html">Marie Curie</a></li>
        <li><a href="scientist3.html">Alexander Fleming</a></li>
        <li><a href="scientist4.html">Nelson Mandela</a></li>
        <li><a href="scientist5.html">Richard Feynman</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5>Resources</h5>
      <ul>
        <li><a href="downloads/book1.pdf" download>Download Book 1</a></li>
        <li><a href="downloads/book2.pdf" download>Download Book 2</a></li>
        <li><a href="contact.html#references">References</a></li>
        <li><a href="https://www.nobelprize.org" target="_blank" rel="noopener">nobelprize.org ↗</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <span>© <span data-year></span>
     Nobel Prize Winners —  E-Project by Kanwal bushra huzaifa. For academic use only.</span>
    <span>Built with HTML · CSS3 · Vanilla JS</span>
  </div>
</footer>`;

/* ── Inject on DOM ready ── */
document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;
});
