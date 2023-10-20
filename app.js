function addTask(){
    var taskinput = document.getElementById('task');
    var taskText = taskinput.value;
    taskinput.value = taskText;
    if(taskText.trim() === ''){
        return;
    }

var taskList = document.getElementById('taskList');
var listItem = document.createElement('li');
listItem.innerHTML = `
${taskText}
<button onclick = "EditTask(this)">Edit</button>
<button onclick = "DeleteTask(this)">Delete</button>
`;
taskList.appendChild(listItem);
}

function EditTask(button){
    var listItem = button.parentNode;
    var taskText  = listItem.firstChild;
    var newTaskText = prompt('Edit Task',taskText.textContent);
    if(newTaskText !== null){
        taskText.textContent = newTaskText;
    }
}

function DeleteTask(button){
    var listItem = button.parentNode;
    var taskList = document.getElementById('taskList');
    taskList.removeChild(listItem);
}



