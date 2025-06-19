"use strict";

document
  .getElementById("elements")
  .addEventListener("change", function (event) {
    console.log("Selected value:", event.target.value);
    const target = document.getElementById("target");
    let hasForm = document.querySelector("form") !== null;
    if (!hasForm) buildForm(target);
    if (event.target.value == "text") addTextBox();
    if (event.target.value == "number") addNumberBox();
    if (event.target.value == "email") addEmailBox();
    this.value = "";
  });

function buildForm(target) {
  const form = document.createElement("form");
  form.setAttribute("id", "form");
  form.innerHTML = "<label>Dynamic JS Form</label><br>";

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submitBtn.setAttribute("id", "submit");
  submitBtn.setAttribute("type", "submit");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formData);
    console.log(formDataObj);
  });

  const resetBtn = document.createElement("button");
  resetBtn.textContent = "Reset";
  resetBtn.setAttribute("type", "reset");

  form.appendChild(submitBtn);
  form.appendChild(resetBtn);
  target.appendChild(form);
}

function addTextBox() {
  const form = document.getElementById("form");
  const newElem = document.createElement("input");
  let idNr = document.querySelectorAll('input[type="text"]').length + 1;
  newElem.setAttribute("type", "text");
  newElem.setAttribute("name", `text${idNr}`);
  newElem.setAttribute("id", `text${idNr}`);
  const submit = document.getElementById("submit");
  form.insertBefore(newElem, submit);
  newElem.insertAdjacentHTML(
    "beforebegin",
    `<label for ="text${idNr}">Text ${idNr}:</label>`
  );
  submit.insertAdjacentHTML("beforebegin", "<br>");
}

function addNumberBox() {
  const form = document.getElementById("form");
  const newElem = document.createElement("input");
  let idNr = document.querySelectorAll('input[type="number"]').length + 1;
  newElem.setAttribute("type", "number");
  newElem.setAttribute("name", `number${idNr}`);
  newElem.setAttribute("id", `number${idNr}`);
  const submit = document.getElementById("submit");
  form.insertBefore(newElem, submit);
  newElem.insertAdjacentHTML(
    "beforebegin",
    `<label for ="Number${idNr}">Number ${idNr}:</label>`
  );
  submit.insertAdjacentHTML("beforebegin", "<br>");
}

function addEmailBox() {
  const form = document.getElementById("form");
  const newElem = document.createElement("input");
  let idNr = document.querySelectorAll('input[type="email"]').length + 1;
  newElem.setAttribute("type", "email");
  newElem.setAttribute("name", `email${idNr}`);
  newElem.setAttribute("id", `email${idNr}`);
  const submit = document.getElementById("submit");
  form.insertBefore(newElem, submit);
  newElem.insertAdjacentHTML(
    "beforebegin",
    `<label for ="email${idNr}">Email ${idNr}:</label>`
  );
  submit.insertAdjacentHTML("beforebegin", "<br>");
}
