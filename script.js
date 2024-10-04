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

        listItem.textContent = task;

        // Insert the checkbox before the task text
        listItem.prepend(checkbox);
        
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteTask(index);
        });

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
    });
}
