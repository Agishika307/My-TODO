let input = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let taskCount = document.getElementById("taskCount");

function addTask() {

    if (input.value.trim() === "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        ${input.value}
        <span onclick="removeTask(this)">Remove</span>
    `;

    taskList.appendChild(li);

    input.value = "";

    updateCount();
}

function removeTask(x) {
    x.parentElement.remove();

    updateCount();
}

function updateCount() {
    taskCount.innerText = "My Total Tasks: " + taskList.children.length;
}