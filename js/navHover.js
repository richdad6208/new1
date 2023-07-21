const navigation = document.querySelector(".primary-navigation");
const header = document.querySelector(".primary-header");
const logo = document.querySelector(".logo img");
navigation.addEventListener("mouseenter", () => {
  if (!header.hasAttribute("aria-expanded")) {
    header.setAttribute("data-hover", "");
    logo.setAttribute("src", "images/logo-colored.png");
  }
});
navigation.addEventListener("mouseleave", () => {
  header.removeAttribute("data-hover");
  logo.setAttribute("src", "images/logo.png");
});
