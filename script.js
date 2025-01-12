const taskInput = document.querySelector(".task-input");
const dateInput = document.querySelector(".date-input");
const checkboxes = document.querySelector(".checkboxes");
const checkedCheckboxes = document.querySelector(".checked-checkboxes");
const taskContainer = document.querySelector(".task-list-container");
const finishedContainer = document.querySelector(".finished-list-container");
const araw = document.querySelector(".date-today");
let result; 

const taskList = [];
const finishList = [];

const startPage = () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    result = date.toISOString().split('T')[0];
    araw.innerHTML = result;
};

const renderShit = () => {
    let tempHTML = "";
    let fTempHTML = "";

    for(let i = 0; i < taskList.length; i++){
        tempHTML += 
            `<div class="tasks">
                <div>${taskList[i].task}
                    <p class="dates">${result === taskList[i].due? `Today`: taskList[i].due}</p>
                </div>
                <div>
                    <input type="checkbox" class="checkboxes" onclick="handleFinished(${i})">
                </div>
            </div>`;
    }
    for(let i = 0; i < finishList.length; i++){
        fTempHTML +=
            `<div class="tasks">
                <div>${finishList[i].task}
                   <p class="dates">${result === finishList[i].due? `Today`: finishList[i].due}</p>
                </div>
                <div>
                    <input type="checkbox" checked class="checked-checkboxes"  onclick="handleUnfinish(${i})">
                </div>
            </div>`;
    }
    taskContainer.innerHTML = tempHTML;
    finishedContainer.innerHTML = fTempHTML;

    if (taskList.length == 0 && finishList.length == 0){ 
        taskContainer.innerHTML = 
        `<div class="tasks">
            <div style="color: #666;">Start setting your goals!</div>
        </div>`;
    
    return;
    }
}

const handleTaskInput = (e) => {
    e.preventDefault();

    taskList.push({
        task: taskInput.value,
        due: dateInput.value
    });

    renderShit();
    taskInput.value = "";
    dateInput.value = "";
}
const handleFinished = (num) => {

    finishList.push({
        task: taskList[num].task,
        due: taskList[num].due
    });

    taskList.splice(num, 1);   
    renderShit();
}
const handleUnfinish = (num) => {

    taskList.push({
        task: finishList[num].task,
        due: finishList[num].due
    });

    finishList.splice(num, 1);   
    renderShit();
}
const deleteFinished = () => {
    finishList.length = 0;
    renderShit();
}

renderShit();
startPage();