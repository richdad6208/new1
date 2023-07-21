const navToggle = document.querySelector(".nav-toggle > a");
const primaryHeader = document.querySelector(".primary-header");
const navToggleClose = document.querySelector(".nav-toggle-close");

navToggleClose.addEventListener("click", () => {
  primaryHeader.removeAttribute("aria-expanded");
  document.body.removeAttribute("data-scroll-locked");
});

navToggle.addEventListener("click", () => {
  primaryHeader.toggleAttribute("aria-expanded");
  if (!document.body.hasAttribute("data-scroll-locked"))
    document.body.setAttribute("data-scroll-locked", "");
});
