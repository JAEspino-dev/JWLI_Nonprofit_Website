document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.getElementById('navToggle');
  var primaryNav = document.getElementById('primaryNav');

  if (!navToggle || !primaryNav) return;

  function closeMenu() {
    primaryNav.classList.remove('is-open');
    navToggle.classList.remove('is-active');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    var isOpen = primaryNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  navToggle.addEventListener('click', toggleMenu);

  // Close the mobile menu after a link is chosen
  primaryNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Keep menu state sane if the viewport is resized past the mobile breakpoint
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
});
