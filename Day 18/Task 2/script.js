function insertRow() {
  const table = document.querySelector("#usersTb");
  const nameIE = document.getElementById("name"),
    ageIE = document.getElementById("age"),
    roleIE = document.getElementById("role");

  const newRow = table.insertRow(),
    nameCell = newRow.insertCell(),
    ageCell = newRow.insertCell(),
    roleCell = newRow.insertCell();
  nameCell.textContent = nameIE.value;
  nameIE.value = "";
  ageCell.textContent = ageIE.value;
  ageIE.value = "";
  roleCell.textContent = roleIE.value;
  roleIE.value = "";

  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.setAttribute("class", "right");

  delBtn.onclick = function () {
    table.deleteRow(delBtn.closest("tr").rowIndex);
  };
  roleCell.appendChild(delBtn);

  console.log(table);
}

function filterTable() {
  const searchInput = document.querySelector("#searchInput");
  const rows = document.querySelectorAll("tr");
  const search = searchInput.value.toLowerCase();
  rows.forEach((row, i) => {
    if (i == 0) return;
    row.style.display = row.children[0].innerText.toLowerCase().includes(search)
      ? ""
      : "none";
  });
}
