// Selecting elements from DOM
const inputBox = document.getElementById("inputBox");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Function add task
const addTask = () => {
  if (inputBox.value == "") {
    alert("You must write a task");
  } else {
    // adding li element task
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskList.appendChild(li);

    // Adding check function
    li.addEventListener("click", (e) => {
      console.log(e.target);
      checkTask(e.target);
    });
    // Adding delete icon
    let deleteIcon = document.createElement("img");
    deleteIcon.src = "./src/img/delete.png";
    li.appendChild(deleteIcon);

    deleteIcon.addEventListener("click", (e) => {
      delTask(e.target);
    });

    // clear input after add task
    inputBox.value = "";
  }
};

// Function check taks
const checkTask = (element) => {
  element.classList.toggle("checked");
};

// Function delete task
const delTask = (element) => {
  element.parentElement.remove();
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
