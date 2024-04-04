let form = document.querySelector("#task_form");
let taskInput = document.querySelector("#new_task");
let taskList = document.querySelector("ul");
let clearBtn = document.querySelector("#clear_task_list");
let addBtn = document.querySelector("#add_btn");

taskInput.addEventListener("input", toggleBtn);
form.addEventListener("submit", addTask);
form.addEventListener("submit", clearToggleBtn);

taskList.addEventListener("click", removeTask);
clearBtn.addEventListener("click", removeAll);

function toggleBtn() {
    if (taskInput.value.trim() !== "") {
        addBtn.classList.remove("disabled");
        addBtn.classList.add("active");
    } else {
        addBtn.classList.remove("active");
        addBtn.classList.add("disabled");
    }
}

function addTask(e) {
    e.preventDefault();
    if (taskInput.value !== "") {
        document.getElementById("no_task").style.display = 'none';

        let icon = document.createElement("img");
        icon.src = "./img/alert-triangle.svg";
        taskList.style.listStyleType = "none";
        let li = document.createElement("li");

        li.classList.add("list-group-item");
        li.classList.add("list-group-item-warning");
        li.classList.add("justify-content-between");
        li.classList.add("align-items-center");

        li.appendChild(icon);
        li.appendChild(document.createTextNode(" " + taskInput.value + " "));
        let link = document.createElement("a");
        link.style.textDecoration = "none";
        link.style.position = "right";
        link.setAttribute("href", "#");

        link.innerHTML = "X";
        li.appendChild(link);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
function removeTask(e) {
    if (e.target.hasAttribute("href")) {
        let elc = e.target.parentElement;
        elc.remove();
    }
    document.getElementById("no_task").style.display = 'block';
}
function clearToggleBtn() {
    if (taskList.children.length !== 0) {
        clearBtn.classList.remove("disabled");
        clearBtn.classList.add("active");
    } else {
        clearBtn.classList.remove("active");
        clearBtn.classList.add("disabled");
    }

}

function removeAll() {
    if (taskList.children.length !== 0) {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        document.getElementById("no_task").innerHTML = "No Task Added Yet";
    }
    document.getElementById("no_task").style.display = 'block';
}
