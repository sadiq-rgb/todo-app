// Get DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = "";
}

// Event listener for the add button
addTaskBtn.addEventListener('click', addTask);

// Optional: Add task by pressing Enter key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
