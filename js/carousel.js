const slides = document.querySelectorAll(".slide-list > li");
const prev = document.querySelector(".slide-prev");
const next = document.querySelector(".slide-next");
const page1 = document.querySelector(".slide-01");
const page2 = document.querySelector(".slide-02");
const page3 = document.querySelector(".slide-03");
const pagenation = document.querySelectorAll(".pagenation");

let currentIndex = 0;
let startIndex = 0;

const moveSlide = (index) => {
  slides.forEach((slide) => slide.classList.remove("showing"));
  slides[index].classList.add("showing");
  pagenation.forEach((page) => page.classList.remove("showing"));
  pagenation[index].classList.add("showing");
};
const nextMoveSlide = () => {
  if (currentIndex !== 2) {
    currentIndex += 1;
    moveSlide(currentIndex);
  } else {
    currentIndex = 0;
    moveSlide(currentIndex);
  }
};
const prevMoveSlide = () => {
  if (currentIndex !== 0) {
    currentIndex -= 1;
    moveSlide(currentIndex);
  } else {
    currentIndex = 2;
    moveSlide(currentIndex);
  }
};
prev.addEventListener("click", prevMoveSlide);
next.addEventListener("click", nextMoveSlide);

page1.addEventListener("click", () => {
  slides.forEach((slide) => slide.classList.remove("showing"));
  slides[0].classList.add("showing");
  pagenation.forEach((page) => page.classList.remove("showing"));
  pagenation[0].classList.add("showing");
});
page2.addEventListener("click", () => {
  slides.forEach((slide) => slide.classList.remove("showing"));
  slides[1].classList.add("showing");
  pagenation.forEach((page) => page.classList.remove("showing"));
  pagenation[1].classList.add("showing");
});
page3.addEventListener("click", () => {
  slides.forEach((slide) => slide.classList.remove("showing"));
  slides[2].classList.add("showing");
  pagenation.forEach((page) => page.classList.remove("showing"));
  pagenation[2].classList.add("showing");
});

moveSlide(0);

setInterval(nextMoveSlide, 10000);
