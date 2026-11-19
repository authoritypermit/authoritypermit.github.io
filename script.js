// ============================================================
// AUTHORITY PERMIT — CLIENT SCRIPT
// Mobile nav toggle + sticky sidebar scroll position tracking
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

  const requestType = document.getElementById('request-type');
  if (requestType && new URLSearchParams(window.location.search).get('request') === 'ongoing') {
    requestType.value = 'Ongoing permitting';
  }

  // ---- Mobile nav toggle ----
  const toggle = document.querySelector('.topbar-toggle');
  const links = document.querySelector('.topbar-links');
  if (toggle && links) {
    toggle.addEventListener('click', function() {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        links.classList.remove('open');
      });
    });
  }

  // ---- Sticky sidebar scroll tracking ----
  // For every sidebar-nav with [data-sticky-nav], watch the target sections
  // and highlight the nav item for the section currently in view.
  document.querySelectorAll('[data-sticky-nav]').forEach(function(navEl) {
    const navItems = navEl.querySelectorAll('.sidebar-nav-item');
    if (!navItems.length) return;

    // Map target IDs to nav items and collect target elements
    const targetMap = new Map();
    const targets = [];
    navItems.forEach(function(item) {
      const targetId = item.getAttribute('data-target');
      if (!targetId) return;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetMap.set(targetEl, item);
        targets.push(targetEl);
      }

      // Click to smooth-scroll to section
      item.addEventListener('click', function() {
        if (targetEl) {
          const top = targetEl.getBoundingClientRect().top + window.pageYOffset - 100;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });

    if (!targets.length) return;

    // IntersectionObserver: track which section is most in view
    const observerOptions = {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        const navItem = targetMap.get(entry.target);
        if (entry.isIntersecting) {
          // Clear active state from siblings
          navItems.forEach(function(i) { i.classList.remove('active'); });
          if (navItem) navItem.classList.add('active');
        }
      });
    }, observerOptions);

    targets.forEach(function(t) { observer.observe(t); });

    // Set initial active state to first visible
    if (navItems[0]) navItems[0].classList.add('active');
  });

});
