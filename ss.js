
const toDoListContainer = document.querySelector(".to-do-list-container");
const completeItem = toDoListContainer.querySelector(".complete-item");
const addToDo = toDoListContainer.querySelector(".add-to-do");
const deleteToDo = document.querySelector(".delete-to-do");
const toDoInput = toDoListContainer.querySelector(".to-do-input");

// module
const completeModule = document.querySelector(".complete-module");
const closeComplete = document.querySelector(".close-complete");
const deleteToDoComplete = document.querySelector(".delete-to-do-complete");


addToDo.addEventListener("click", addToDoButton);
deleteToDo.addEventListener("click", deleteTodoItem);
//deleteToDoComplete.addEventListener("click", deleteToDoCompleteButton);
completeItem.addEventListener("click", completeItemButton);
closeComplete.addEventListener("click", closeCompleteButton);

function addToDoButton(){
    let toDoItem = document.createElement('div')
    let inputToDo = document.createElement('input'); // todo yaz 
    let removeRadio = document.createElement("input");// select kocur
    let deleteButtonRadio = document.createElement("input"); // select sil

    toDoItem.className = "to-do-list";
    inputToDo.className = "input-to-do"
    removeRadio.type = "checkbox";
    removeRadio.className = "radio";
    inputToDo.value = toDoInput.value;
    deleteButtonRadio.type = "checkbox";
    toDoInput.value = "";
    toDoItem.appendChild(removeRadio);
    toDoItem.appendChild(inputToDo);
    toDoItem.appendChild(deleteButtonRadio);
    toDoListContainer.appendChild(toDoItem);

    inputToDo.addEventListener("click", EditToDoItem); // save edit edende
    removeRadio.addEventListener("click", removeToDoItem); // 
    deleteButtonRadio.addEventListener("click",showDeleteTodoTrash)
}

function EditToDoItem(e){ // save edit edende
    let saveEdit = document.createElement('i');
    saveToDo.className = "fas fa-download save-to-do";
    e.target.parentElement.appendChild(saveToDo);
    saveEdit.addEventListener("click", saveEditValue);
}
function saveEditValue(){e.target.style.display = "none"}

function removeToDoItem(e){
  e.target.parentElement.remove();
  completeModule.appendChild(e.target.parentElement);
}

function completeItemButton(){completeModule.style.display = "block";}
function closeCompleteButton(){completeModule.style.display = "none";}
//      deleteToDo.style.display = "block";

let arr =[];
function showDeleteTodoTrash(e){    
    arr.push(e.target);
    if(arr.length>0){
        deleteToDo.style.display = "block";
    }
    else{deleteToDo.style.display = "none";}
}

function deleteTodoItem(){
    console.log(4)
}




