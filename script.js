const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        displayTasks(tasks);

      
        const addTaskButton = document.getElementById('add-task-button');
        addTaskButton.addEventListener('click', addTask);

   
        function addTask() {
            const taskInput = document.getElementById('task-input');
            const newTask = taskInput.value.trim();

            if (newTask !== "") {
                tasks.push(newTask);
                localStorage.setItem('tasks', JSON.stringify(tasks)); 
                displayTasks(tasks);
                taskInput.value = ""; 
            }
        }

    
        function displayTasks(tasks) {
            const todoList = document.getElementById('todo-list');
            todoList.innerHTML = ''; 

            tasks.forEach((task, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = task;
                
          listItem.addEventListener("click", function() {
              listItem.classList.toggle("checked")
          })
             
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

   
        function deleteTask(index) {
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks)); 
            displayTasks(tasks);
        }