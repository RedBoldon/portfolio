const hamMenu = document.querySelector(".ham-menu");

const mainNav = document.querySelector(".main-nav");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  mainNav.classList.toggle("active");
});