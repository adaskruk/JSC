"use strict";

//Tab button click handler
const tabs = document.querySelector(".tab-headers");
tabs.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    switchToTab(e.target.getAttribute("data-tab"));
  }
});
document.addEventListener('tab-switched', e => {
  console.log('Tab clicked:', e.detail.tabNr, e.detail.activeTab);
})
const btns = document.getElementsByClassName("tab");
const contents = document.getElementsByClassName("content");

function switchToTab(tabNr) {
  [...btns].forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute('data-tab') === tabNr);
  });
  [...contents].forEach((content) => {
    content.classList.toggle('active', content.getAttribute('data-tab') === tabNr)
  });
  //Custom Event implementation
  const activeTab = document.querySelector('.tab.active').textContent;
  const event = new CustomEvent('tab-switched', {detail: {tabNr, activeTab}});
  document.dispatchEvent(event);
}
//keyboard shortcuts (copied from task)
document.addEventListener("keydown", (e) => {
    if (e.key === "1") switchToTab('1');
    if (e.key === "2") switchToTab('2');
    if (e.key === "3") switchToTab('3');
    });