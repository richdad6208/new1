const navItem = document.querySelectorAll(".nav-list > li");

navItem.forEach((item) =>
  item.addEventListener("click", () => {
    navItem.forEach((item) => item.removeAttribute("data-visible"));
    item.toggleAttribute("data-visible");
  })
);
