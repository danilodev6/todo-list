// Selecting elements from DOM
const inputBox = document.getElementById("inputBox");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Function add task
const addTask = () => {
  if (inputBox.value.trim() == "") {
    alert("You must write a task");
  } else {
    // adding li element task
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskList.appendChild(li);

    // Adding check function
    li.addEventListener("click", (e) => {
      checkTask(e.target);
    });
    // Adding delete icon
    let deleteIcon = document.createElement("img");
    deleteIcon.src = "./src/img/delete.png";
    taskList.appendChild(deleteIcon);

    deleteIcon.addEventListener("click", (e) => {
      delTask(e.target);
    });

    // clear input after add task
    inputBox.value = "";
    saveData();
  }
};

// Function check taks
const checkTask = (element) => {
  element.classList.toggle("checked");
  saveData();
};

// Function delete task
const delTask = (element) => {
  element.previousSibling.remove();
  element.remove();
  saveData();
};

// Even Listener actions
addButton.addEventListener("click", () => {
  addTask();
});
inputBox.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    addTask();
  }
});

const saveData = () => {
  localStorage.setItem("data", taskList.innerHTML);
};

const getData = () => {
  taskList.innerHTML = localStorage.getItem("data");
  taskList.querySelectorAll("li").forEach((task) => {
    task.addEventListener("click", () => checkTask(task));
  });
  taskList.querySelectorAll("img").forEach((img) => {
    img.addEventListener("click", () => delTask(img));
  });
};

getData();
