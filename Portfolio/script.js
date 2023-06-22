document.getElementById('dark-mode-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

document.addEventListener("DOMContentLoaded", function() {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarMenu = document.querySelector(".navbar-collapse");
  const navbarLinks = document.querySelectorAll(".nav-link");

  navbarToggler.addEventListener("click", function() {
    navbarMenu.classList.toggle("show");
  });

  navbarLinks.forEach(function(navbarLink) {
    navbarLink.addEventListener("click", function() {
      if (navbarMenu.classList.contains("show")) {
        navbarMenu.classList.remove("show");
      }
    });
  });
});