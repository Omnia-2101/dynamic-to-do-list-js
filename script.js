document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // 🧭 Load saved tasks on page load
    loadTasks();

    // 🧭 Add a new task
    function addTask(taskText, save = true) {
        // If called without text, read the input
        if (typeof taskText !== 'string') {
            taskText = taskInput.value.trim();
        }

        if (taskText === '') {
            if (save) alert('Please enter a task.');
            return;
        }

        // ✅ Create list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // ✅ Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.onclick = function() {
            taskList.removeChild(li);    // Remove from DOM
            removeTaskFromStorage(taskText); // Remove from localStorage
        };
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // ✅ Save new task to localStorage if `save` is true
        if (save) {
            saveTaskToStorage(taskText);
        }

        // ✅ Clear the input
        taskInput.value = '';
    }

    // 🧭 Save a task to localStorage
    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // 🧭 Remove a task from localStorage
    function removeTaskFromStorage(taskText) {
        let storedTa
