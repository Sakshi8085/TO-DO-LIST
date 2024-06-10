document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const navbar = document.getElementById('navbar');
    const priorityFilter = document.getElementById('priorityFilter');

    // Function to add a new task
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const priority = taskList.value || 'low'; // Default priority if not selected
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task ${priority}">${taskText}</span>
            <button class="deleteBtn">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    };

    // Function to remove a task
    const removeTask = (e) => {
        if (e.target.classList.contains('deleteBtn')) {
            e.target.parentElement.remove();
        }
    };

    // Function to mark a task as complete
    const toggleComplete = (e) => {
        if (e.target.classList.contains('task')) {
            e.target.classList.toggle('complete');
        }
    };

    // Function to filter tasks by priority
    const filterTasks = () => {
        const selectedPriority = priorityFilter.value;
        const tasks = document.querySelectorAll('.task');
        
        tasks.forEach(task => {
            task.parentElement.style.display = 'block'; // Show all tasks initially
            
            if (selectedPriority !== 'all' && !task.classList.contains(selectedPriority)) {
                task.parentElement.style.display = 'none'; // Hide tasks not matching selected priority
            }
        });
    };

    // Event listeners
    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', removeTask);
    taskList.addEventListener('click', toggleComplete);
    priorityFilter.addEventListener('change', filterTasks);

    // Add scroll event listener to the window
    window.addEventListener('scroll', () => {
        // Check if the scroll position is below the navbar position
        if (window.scrollY > navbar.offsetTop) {
            navbar.style.backgroundColor = '#333'; // Change background color of navbar
        } else {
            navbar.style.backgroundColor = '#4caf50'; // Reset background color of navbar
        }
    });
});
