// Select DOM elements
const input = document.getElementById("user-input");
const taskList = document.querySelector(".TaskList");

// Function to add task
function addTask() {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create <li> element
  const newTask = document.createElement("li");
  newTask.innerText = taskText;

  // Toggle "completed" class on click
  newTask.addEventListener("click", function () {
    newTask.classList.toggle("completed");
  });

  // Add to the list
  taskList.appendChild(newTask);

  // Clear input
  input.value = "";
}

// Optional: Clear all tasks (attach this in HTML or add selector)
document.getElementById("clearBtn").addEventListener("click", function () {
  taskList.innerHTML = "";
});

