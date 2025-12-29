// Script per chiusura automatica navbar mobile
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth < 992) {
        let bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (!bsCollapse) {
          bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
          });
        }
        bsCollapse.hide();
      }
    });
  });
});