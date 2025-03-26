"use strict";
const input = document.querySelector(".container__form__input");
const form = document.getElementById("todo_form");
const todolist = document.querySelector("#todo-list");
const donelist = document.querySelector("#done-list");
let todos = [];
let doneTasks = [];
const renderTasks = () => {
    todolist.innerHTML = '';
    donelist.innerHTML = '';
    todos.forEach((todo) => {
        const li = createTodoElement(todo, false);
        todolist.appendChild(li);
    });
    doneTasks.forEach((todo) => {
        const li = createTodoElement(todo, true);
        donelist.appendChild(li);
    });
};
const getTodoText = () => {
    return input.value.trim();
};
const addTodo = (text) => {
    todos.push({ id: Date.now(), text });
    input.value = '';
    renderTasks();
};
const completeTodo = (todo) => {
    todos = todos.filter((t) => t.id !== todo.id);
    doneTasks.push(todo);
    renderTasks();
};
const deleteTodo = (todo) => {
    doneTasks = doneTasks.filter((t) => t.id !== todo.id);
    renderTasks();
};
const createTodoElement = (todo, isDone) => {
    const li = document.createElement('li');
    li.classList.add('render-container__item');
    const p = document.createElement('p');
    p.classList.add('render-container__item-text');
    p.textContent = todo.text;
    li.appendChild(p);
    const button = document.createElement("button");
    button.classList.add('render-container__item-button');
    if (isDone) {
        button.textContent = "삭제";
        button.style.backgroundColor = "#dc3545";
    }
    else {
        button.textContent = "완료";
        button.style.backgroundColor = "#28a745";
    }
    button.addEventListener('click', () => {
        if (isDone) {
            deleteTodo(todo);
        }
        else {
            completeTodo(todo);
        }
    });
    li.appendChild(button);
    return li;
};
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = getTodoText();
    if (text) {
        addTodo(text);
    }
});
renderTasks();
