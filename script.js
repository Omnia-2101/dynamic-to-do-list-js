// Wait for the DOM to load before running any JS
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define addTask function
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        // Append remove button to list item
        li.appendChild(removeButton);
        // Append list item to list
        taskList.appendChild(li);

        // Clear the input
        taskInput.value = '';
    }

    // Add event listener for clicking the add task button
    addButton.addEventListener('click', addTask);

    // Add event listener for Enter keypress on input
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optional: invoke addTask() on DOMContentLoaded if you want to pre-populate some task
    // (Not required, so leaving blank as per the task requirements)
});
