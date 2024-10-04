function displayTasks(tasks) {
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
