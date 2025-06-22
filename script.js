document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // addTask function
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // ✅ Create new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // ✅ Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // ✅ Remove list item when removeButton is clicked
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        // ✅ Append removeButton to list item
        li.appendChild(removeButton);

        // ✅ Append list item to list
        taskList.appendChild(li);

        // ✅ Clear the input
        taskInput.value = '';
    }

    // ✅ Attach event listener to addButton
    addButton.addEventListener('click', addTask);

    // ✅ Attach event listener to taskInput for Enter key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
