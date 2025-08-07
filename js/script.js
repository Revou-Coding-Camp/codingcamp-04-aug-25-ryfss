console.log("Hello World");

let todoList = [];

function validateForm() {
    const todoInput = document.getElementById("todo-input").value;
    const dateInput = document.getElementById("date-input").value;

    if (todoInput === '' || dateInput === '') {
        alert('Please enter a todo item and a due date.');
    } else {
        addTodo(todoInput, dateInput);
        document.getElementById("todo-input").value = '';
        document.getElementById("date-input").value = '';
    }
}

function addTodo(todo, date) {
    const todoItem = {
        task: todo,
        Date: date,
    };
    todoList.push(todoItem);
    displayTodos();
    console.log('todo added:', todoList);
}

function displayTodos() {
    const todoListElement = document.getElementById("todo-list");
    todoListElement.innerHTML = '';

    todoList.forEach((item, index) => {
        todoListElement.innerHTML += `<div class="text-gray-700 text-xl">${item.task} - (${item.Date})</div>`;
    });
}

function clearTodos() {
    todoList = [];
    displayTodos();
    console.log('todo list cleared');
}
