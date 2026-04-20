/* =====================================================
   Scientific Theory Webpage — JavaScript
   ===================================================== */

(function () {
  'use strict';

  /* ── Navbar scroll shadow ─────────────────────────── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* ── Mobile hamburger ─────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
    hamburger.setAttribute(
      'aria-expanded',
      navLinks.classList.contains('open').toString()
    );
  });

  // Close mobile menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ── Concept cards expand / collapse ─────────────── */
  document.querySelectorAll('.concept-card').forEach(function (card) {
    card.addEventListener('click', function () {
      const wasExpanded = card.classList.contains('expanded');
      // Collapse all
      document.querySelectorAll('.concept-card').forEach(function (c) {
        c.classList.remove('expanded');
        var toggle = c.querySelector('.concept-toggle');
        if (toggle) toggle.textContent = 'Learn more ↓';
      });
      // Expand clicked card (unless it was already open)
      if (!wasExpanded) {
        card.classList.add('expanded');
        var toggle = card.querySelector('.concept-toggle');
        if (toggle) toggle.textContent = 'Collapse ↑';
      }
    });
  });

  /* ── Interactive Explorer tabs ────────────────────── */
  const explorerNavItems = document.querySelectorAll('.explorer-nav-item');
  const explorerPanels = document.querySelectorAll('.explorer-panel');

  explorerNavItems.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const target = btn.getAttribute('data-target');

      explorerNavItems.forEach(function (b) { b.classList.remove('active'); });
      explorerPanels.forEach(function (p) { p.classList.remove('active'); });

      btn.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });

  /* ── Feedback form ────────────────────────────────── */
  const feedbackForm = document.getElementById('feedbackForm');
  const formSuccess = document.getElementById('formSuccess');

  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic client-side validation
      const name = document.getElementById('fieldName').value.trim();
      const email = document.getElementById('fieldEmail').value.trim();
      const message = document.getElementById('fieldMessage').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.');
        return;
      }

      if (!isValidEmail(email)) {
        showToast('Please enter a valid email address.');
        return;
      }

      // Simulate submission (replace with your real endpoint)
      const submitBtn = feedbackForm.querySelector('.form-submit');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      setTimeout(function () {
        feedbackForm.style.display = 'none';
        formSuccess.style.display = 'block';
        showToast('✅ Message sent! Thank you.');
      }, 1200);
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* ── Toast notifications ──────────────────────────── */
  function showToast(message, duration) {
    duration = duration || 3500;
    var toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(function () {
      toast.classList.remove('show');
    }, duration);
  }

  /* ── Scroll-triggered fade-in ─────────────────────── */
  if ('IntersectionObserver' in window) {
    var fadeEls = document.querySelectorAll('[data-fade]');
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    fadeEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
      observer.observe(el);
    });
  }

  /* ── Active nav link on scroll ────────────────────── */
  var sections = document.querySelectorAll('section[id]');
  var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  function onScrollHighlight() {
    var scrollY = window.scrollY + 90;
    sections.forEach(function (section) {
      if (
        scrollY >= section.offsetTop &&
        scrollY < section.offsetTop + section.offsetHeight
      ) {
        navAnchors.forEach(function (a) {
          a.style.color = '';
          if (a.getAttribute('href') === '#' + section.id) {
            a.style.color = 'var(--color-text)';
          }
        });
      }
    });
  }

  window.addEventListener('scroll', onScrollHighlight);
  onScrollHighlight();
})();
