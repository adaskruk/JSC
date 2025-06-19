function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const task = taskInput.value;

  if (task.trim() === "") return;

  const li = document.createElement("li");

  li.innerText = task;

  const completeBtn = document.createElement("button");
  completeBtn.innerText = "✅";
  completeBtn.style.marginLeft = "5px";
  completeBtn.onclick = function () {
    li.classList.toggle("completed");
  };
  li.appendChild(completeBtn);

  const editBtn = document.createElement("button");
  editBtn.innerText = "📋";
  editBtn.style.marginLeft = "5px";
  editBtn.onclick = function () {
    if (taskInput.value.trim() === "") return;
    editBtn.previousSibling.previousSibling.data = taskInput.value;
    taskInput.value = "";
  };
  li.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.style.marginLeft = "5px";
  deleteBtn.onclick = function () {
    li.remove();
  };
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  taskInput.value = "";
}

function filterTasks() {
  // Implement the filter functionality
  const searchInput = document.querySelector("#searchInput");
  const listElems = document.querySelectorAll("#taskList li");
  const search = searchInput.value.toLowerCase();
  listElems.forEach((item) => {
    item.style.display = item.innerText.toLowerCase().includes(search)
      ? "block"
      : "none";
  });
}