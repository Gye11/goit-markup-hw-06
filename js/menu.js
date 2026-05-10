const mobileMenu = document.querySelector(".mobile-menu");

const openMenuBtn = document.querySelector(".menu-toggle");

const closeMenuBtn = document.querySelector(".mobile-close");

openMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
});

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
});
