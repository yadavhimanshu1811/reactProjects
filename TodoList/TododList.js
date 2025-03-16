const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddToList(){
    if(inputBox.value == ''){
        alert("List item can't be empty. Please write something !");
    }else{
        let li = document.createElement("li");

        let taskSpan = document.createElement("span");
        taskSpan.textContent = inputBox.value;
        li.appendChild(taskSpan);
        

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.onclick = function(){
            li.remove();
    
        };
        li.appendChild(deleteButton);

        let taskDoneButton = document.createElement("button");
        taskDoneButton.textContent = "Completed";
        taskDoneButton.className = "complete-btn";
        taskDoneButton.onclick = function(){
            taskSpan.classList.toggle("completed");
            if(taskSpan.classList.contains("completed")){
                taskDoneButton.textContent = "Mark as Incomplete";
            }else{
                taskDoneButton.textContent = "Completed";
            }
    
        };
        li.appendChild(taskDoneButton);

        listContainer.appendChild(li);
    }
    inputBox.value = '';
}

function taskDoneClick(){
    console.log("btn click");
}

