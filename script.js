document.addEventListener('DOMContentLoaded', function() {
    // Select the elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // addTask function
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            // ✅ Create a new li element and set its textContent
            const li = document.createElement('li');
            li.textContent = taskText;

            // ✅ Create a new button for removing the task
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            // ✅ Assign an onclick event that removes the li element
            removeButton.onclick = function() {
                taskList.removeChild(li);
            };

            // ✅ Append the remove button to the li
            li.appendChild(removeButton);

            // ✅ Append the li to the taskList
            taskList.appendChild(li);

            // ✅ Clear the task input field
            taskInput.value = '';
        } else {
            // Optional: Alert if empty
            alert('Please enter a task.');
        }
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
