"use strict";

const tabs = document.querySelector(".tab-headers");
tabs.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    switchToTab(e.target.getAttribute("data-tab"));
  }
});
const btns = document.getElementsByClassName("tab");
console.log(btns);
const contents = document.getElementsByClassName("content");

function switchToTab(tabNr) {
  console.log("Clicked Tab:", tabNr);
  [...btns].forEach((btn) => {
    btn.classList.toggle("active");
  });
}
//keyboard shortcuts
