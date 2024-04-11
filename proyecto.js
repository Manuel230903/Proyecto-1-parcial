// Obtener elementos del DOM
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Obtener tareas almacenadas localmente
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Función para renderizar la lista de tareas
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.text}</span>
            <button onclick="toggleTask(${index})">${task.completed ? 'Desmarcar' : 'Marcar'}</button>
            <button onclick="editTask(${index})">Editar</button>
            <button onclick="deleteTask(${index})">Eliminar</button>
        `;
        taskList.appendChild(li);
    });
}

// Función para agregar una nueva tarea
function addTask() {
    const text = taskInput.value.trim();
    if (text) {
        tasks.push({ text, completed: false });
        taskInput.value = '';
        renderTasks();
        saveTasks();
    }
}

// Función para marcar o desmarcar una tarea como completada
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
    saveTasks();
}

// Función para editar una tarea existente
function editTask(index) {
    const newText = prompt('Editar tarea:', tasks[index].text);
    if (newText !== null) {
        tasks[index].text = newText.trim();
        renderTasks();
        saveTasks();
    }
}

// Función para eliminar una tarea
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
    saveTasks();
}

// Función para filtrar tareas por estado
function filterTasks(status) {
    let filteredTasks;
    if (status === 'active') {
        filteredTasks = tasks.filter(task => !task.completed);
    } else if (status === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    } else {
        filteredTasks = tasks;
    }
    renderFilteredTasks(filteredTasks);
}

// Función para renderizar tareas filtradas
function renderFilteredTasks(filteredTasks) {
    taskList.innerHTML = '';
    filteredTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.text}</span>
            <button onclick="toggleTask(${index})">${task.completed ? 'Desmarcar' : 'Marcar'}</button>
            <button onclick="editTask(${index})" >Editar</button>
            <button onclick="deleteTask(${index})">Eliminar</button>
        `;
        taskList.appendChild(li);
    });
}

// Función para guardar las tareas en el almacenamiento local
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Renderizar las tareas al cargar la página
renderTasks();
