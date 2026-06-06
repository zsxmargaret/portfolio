// Smooth active nav highlighting on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// Buick Rabbit Slideshow
(function () {
  const HOLD = 1400;      // ms each image stays visible
  const FADE = 450;       // ms fade transition (match CSS)

  const slides = document.querySelectorAll('.buick-slide');
  const barFill = document.querySelector('.buick-bar-fill');

  if (!slides.length || !barFill) return;

  let current = 0;
  let timer = null;

  function showSlide(idx) {
    slides[current].classList.remove('active');
    current = idx;
    slides[current].classList.add('active');

    // Animate progress bar from 0 → 100% over HOLD ms
    barFill.style.transition = 'none';
    barFill.style.width = '0%';
    // Force reflow so the reset takes effect before animating
    void barFill.offsetWidth;
    barFill.style.transition = `width ${HOLD}ms linear`;
    barFill.style.width = '100%';
  }

  function advance() {
    showSlide((current + 1) % slides.length);
  }

  // Start
  showSlide(0);
  timer = setInterval(advance, HOLD);

  // Pause on hover, resume on leave
  const wrap = document.querySelector('.buick-slideshow');
  if (wrap) {
    wrap.addEventListener('mouseenter', () => {
      clearInterval(timer);
      barFill.style.transition = 'none';
    });
    wrap.addEventListener('mouseleave', () => {
      showSlide(current);
      timer = setInterval(advance, HOLD);
    });
  }
})();

// ── Project List: hover to switch preview ──
(function () {
  const rows     = document.querySelectorAll('.proj-row');
  const previews = document.querySelectorAll('.proj-preview');

  if (!rows.length) return;

  function activate(idx) {
    rows.forEach(r => r.classList.remove('active'));
    previews.forEach(p => p.classList.remove('active'));
    rows[idx].classList.add('active');
    previews[idx].classList.add('active');
  }

  rows.forEach((row, i) => {
    // Desktop: hover
    row.addEventListener('mouseenter', () => activate(i));
    // Mobile / touch: click
    row.addEventListener('click', () => activate(i));
  });
})();

// Fade-in on scroll
const fadeEls = document.querySelectorAll('.skill-card, .stat-card, .design-card');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  fadeObserver.observe(el);
});
