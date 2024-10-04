// Initialize tasks array
let tasks = [];

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        taskInput.value = '';
        displayTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Function to display tasks
function displayTasks() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ''; 
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        // Create a checkbox for each task
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function () {
            listItem.classList.toggle('checked');
        });
        // Create a text node for the task content
        const taskText = document.createTextNode(task);
        // Add the checkbox and task text to the list item
        listItem.appendChild(checkbox);
        listItem.appendChild(taskText);
        
        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteTask(index);
        });
        // Add the delete button to the list item
        listItem.appendChild(deleteButton);
        // Append the list item to the todo list
        todoList.appendChild(listItem);
    });
}

// Event listener for the Add Task button
document.getElementById('add-task-button').addEventListener('click', addTask);

// Event listener for the Enter key in the input field
document.getElementById('task-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Initial display of tasks (if any)
displayTasks();
