const tabList = document.querySelectorAll(".menu-item");
const displayList = document.querySelectorAll(".display-item");
const tabListCount = tabList.length;
const displayNext = document.querySelector(".display-next");
const displayPrev = document.querySelector(".display-prev");

let nowIndex = 0;

tabList.forEach((item, index) =>
  item.addEventListener("click", () => {
    tabList.forEach((display) => display.classList.remove("showing"));
    tabList[index].classList.add("showing");
    displayList.forEach((display) => display.classList.remove("showing"));
    displayList[index].classList.add("showing");
  })
);

const moveTab = (index) => {
  displayList.forEach((display) => display.classList.remove("showing"));
  displayList[index].classList.add("showing");
  tabList.forEach((display) => display.classList.remove("showing"));
  tabList[index].classList.add("showing");
};
const nextTab = () => {
  nowIndex += 1;
  if (nowIndex === tabListCount) {
    nowIndex = 0;
  }
  moveTab(nowIndex);
};
const prevTab = () => {
  nowIndex -= 1;
  if (nowIndex === -1) {
    nowIndex = tabListCount;
  }
  moveTab(nowIndex);
};

displayNext.addEventListener("click", () => {
  nextTab();
});
displayPrev.addEventListener("click", () => {
  prevTab();
});
setInterval(nextTab, 10000);
setInterval(() => {
  displayList.forEach((item, index) => {
    const check = item.classList.contains("showing");
    if (check) nowIndex = index;
  });
}, 1000);
