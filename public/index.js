const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu");

menuIcon.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
