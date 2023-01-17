// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile mobile navigation work
const btnMobileNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnMobileNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
