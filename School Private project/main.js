const menu = document.querySelector(".menu_btn");
const sideBar = document.querySelector(".nav_items");
const header = document.querySelector(".header");

menu.addEventListener("click", () => {
  sideBar.classList.toggle("sideBar");
  header.classList.add("");
});
