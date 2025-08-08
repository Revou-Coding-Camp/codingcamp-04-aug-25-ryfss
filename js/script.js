let todoList = [];

function validateForm() {
    const todoInput = document.getElementById("todo-input");
    const dateInput = document.getElementById("date-input");

    const task = todoInput.value.trim();
    const dueDate = dateInput.value;

    if (task === '' || dueDate === '') {
        alert('Harap Isi Data dan Tanggal :).');
        return;
    }

    todoList.push({
        task,
        dueDate,
        completed: false
    });

    todoInput.value = '';
    dateInput.value = '';
    renderTable();
}

function clearTodos() {
    todoList = [];
    renderTable();
}

function renderTable(data = todoList) {
    const tableBody = document.getElementById("todo-table-body");
    tableBody.innerHTML = '';

    if (data.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="4" style="text-align: center;">No task found</td></tr>';
        return;
    }

    data.forEach((todo, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${todo.task}</td>
            <td>${todo.dueDate}</td>
            <td>${todo.completed ? 'Completed' : 'Uncompleted'}</td>
            <td>
                <button class="done-btn" onclick="markCompleted(${index})">Done</button>
                <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

function markCompleted(index) {
    todoList[index].completed = true;
    renderTable();
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    renderTable();
}

// Fungsi filter
document.getElementById("filter-button").addEventListener("change", function () {
    const filterValue = this.value;

    if (filterValue === "all") {
        renderTable(todoList);
    } else if (filterValue === "completed") {
        renderTable(todoList.filter(todo => todo.completed));
    } else if (filterValue === "uncompleted") {
        renderTable(todoList.filter(todo => !todo.completed));
    }
});