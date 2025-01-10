const input = document.querySelector(".input");
const dateBtn = document.querySelector(".date-btn");
const toDoList = document.querySelector(".to-do-list");

const taskList = ["Sample"];
const dueList = ["2025-01-10"];

const addTask = (event) => {
    event.preventDefault();
    taskList.push(input.value);
    dueList.push(dateBtn.value);

    console.log(typeof event);
    
    input.value = "";
    dateBtn.value = "";
    renderList();
}

const renderList = () => {
    let HTML = "";
    for(let i = 0; i < taskList.length; i++){
            
        HTML += `<div class="tasks" id="${i}">${taskList[i]} <p class="due-date">${dueList[i]}</p>
        </div> <div><input type="checkbox" class="checkbox" id="cb${i}" ></input></div>`;
    }
    toDoList.innerHTML = HTML;
}