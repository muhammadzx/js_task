let tasks = [];
let tasksLength = tasks.length;
let nextId = 0;

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const counter = document.getElementById("counter");
const emptyMsg = document.getElementById("empty-msg");
const clearDone = document.getElementById("clear-done");
const charCount = document.getElementById("char-count");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentFilter = "all";

function renderTasks() {

    taskList.innerHTML = "";

    for (const task of tasks) {

        if (currentFilter === "active" && task.done) {
            continue;
        }

        if (currentFilter === "done" && !task.done) {
            continue;
        }

        const li = document.createElement("li");

        li.dataset.id = task.id;

        const span = document.createElement("span");

        span.textContent = task.text;

        span.classList.add("task-text");

        if (task.done) {
            li.classList.add("done");
        }

        const button = document.createElement("button");

        button.textContent = "Delete";

        button.classList.add("delete-btn");

        li.appendChild(span);

        li.appendChild(button);

        taskList.appendChild(li);
    }

    updateCounter();
}

function updateCounter() {

    let remaining = 0;

    for (const task of tasks) {

        if (task.done === false) {
            remaining++;
        }
    }

    counter.textContent = `${remaining} task(s) remaining`;

    if (tasks.length === 0) {
        emptyMsg.classList.remove("hidden");
    } else {
        emptyMsg.classList.add("hidden");
    }
}

taskInput.addEventListener("input", function () {

    charCount.textContent = `${taskInput.value.length} / 50`;

});

taskForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const text = taskInput.value.trim();

    if (text === "") {
        return;
    }

    if (text.length > 50) {
        return;
    }

    const newTask = {
        id: nextId,
        text: text,
        done: false
    };

    tasks.push(newTask);

    tasksLength++;

    nextId++;

    taskInput.value = "";

    charCount.textContent = "0 / 50";

    renderTasks();
});

taskList.addEventListener("click", function (event) {

    const target = event.target;

    const li = target.parentElement;

    const id = Number(li.dataset.id);

    if (target.classList.contains("task-text")) {

        for (const task of tasks) {

            if (task.id === id) {

                task.done = !task.done;

                break;
            }
        }

        renderTasks();
    }

    if (target.classList.contains("delete-btn")) {

        const newArray = [];

        for (const task of tasks) {

            if (task.id !== id) {

                newArray.push(task);
            }
        }

        tasks = newArray;

        tasksLength = tasks.length;

        renderTasks();
    }
});

clearDone.addEventListener("click", function () {

    const newArray = [];

    for (const task of tasks) {

        if (task.done === false) {

            newArray.push(task);
        }
    }

    tasks = newArray;

    tasksLength = tasks.length;

    renderTasks();
});

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        currentFilter = button.dataset.filter;

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        renderTasks();
    });
});

