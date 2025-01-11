const taskInput = document.querySelector(".task-input");
const dateInput = document.querySelector(".date-input");
const checkboxes = document.querySelector(".checkboxes");
const checkedCheckboxes = document.querySelector(".checked-checkboxes");
const taskContainer = document.querySelector(".task-list-container");
const finishedContainer = document.querySelector(".finished-list-container");

const date = new Date()
const result = date.toISOString().split('T')[0]

const taskList = [];
const dateList = [];

const fTaskList = [];
const fDateList = [];

const renderShit = () => {
    let tempHTML = "";
    let fTempHTML = "";

    for(let i = 0; i < taskList.length; i++){
        tempHTML += 
            `<div class="tasks">
                <div>${taskList[i]}
                    <p class="dates">${result === dateList[i]? `Today`: dateList[i]}</p>
                </div>
                <div>
                    <input type="checkbox" class="checkboxes" onclick="handleFinished(${i})">
                </div>
            </div>`;
    }
    for(let i = 0; i < fTaskList.length; i++){
        fTempHTML +=
            `<div class="tasks">
                <div>${fTaskList[i]}
                   <p class="dates">${result === fDateList[i]? `Today`: fDateList[i]}</p>
                </div>
                <div>
                    <input type="checkbox" checked class="checked-checkboxes"  onclick="handleUnfinish(${i})">
                </div>
            </div>`;
    }
    taskContainer.innerHTML = tempHTML;
    finishedContainer.innerHTML = fTempHTML;
}

const handleTaskInput = (e) => {
    e.preventDefault();

    taskList.push(taskInput.value);
    dateList.push(dateInput.value);

    renderShit();
    taskInput.value = "";
    dateInput.value = "";
}
const handleFinished = (num) => {
    

    fTaskList.push(taskList[num]);
    fDateList.push(dateList[num]);

    taskList.splice(num, 1);
    dateList.splice(num, 1);
    
    renderShit();
}
const handleUnfinish = (num) => {
    taskList.push(fTaskList[num]);
    dateList.push(fDateList[num]);

    fTaskList.splice(num, 1);
    fDateList.splice(num, 1);
    
    renderShit();
}

renderShit();
console.log("tangin");