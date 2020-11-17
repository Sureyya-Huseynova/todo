const toDoListContainer = document.querySelector(".to-do-list-container");
const enterCompletedTodoModule = toDoListContainer.querySelector(".enter-completed-todo-module");
const addToDo = toDoListContainer.querySelector(".add-todo");
const deleteToDo = toDoListContainer.querySelector(".delete-todo");
const writeToDoInput = toDoListContainer.querySelector(".write-todo-input");

// module  tages
const completedToDoListModule = document.querySelector(".completed-todo-list-module");
const closeComplete = document.querySelector(".close-completed-module");
const deleteToDoForCompletedModule = document.querySelector(".delete-todo-for-completed-module");

// eventes for todo-list-container
addToDo.addEventListener("click", isAddToDo);
deleteToDo.addEventListener("click", isDeleteToDo);
enterCompletedTodoModule.addEventListener("click", isEnterCompletedTodoModule);

// events for comleceted-module
closeComplete.addEventListener("click", isCloseComplete);
deleteToDoForCompletedModule.addEventListener("click", isDeleteToDoForCompletedModule);

let arr =[];
function isAddToDo() {
    let singleToDoArea = document.createElement('div') // to do input delete
    let toDoInput = document.createElement('input'); // todo yaz 
    let selectTransferToDo = document.createElement("input");// select kocur
    let selectDeleteToDo = document.createElement("input"); // select sil

    singleToDoArea.className = "single-todo-area";
    toDoInput.className = "input-todo"
    selectTransferToDo.type = "checkbox";
    selectDeleteToDo.type = "checkbox";
    selectDeleteToDo.className = "sel";

    toDoInput.value = writeToDoInput.value;
    writeToDoInput.value = "";
    singleToDoArea.appendChild(selectTransferToDo);
    singleToDoArea.appendChild(toDoInput);
    singleToDoArea.appendChild(selectDeleteToDo);
    toDoListContainer.appendChild(singleToDoArea);

    toDoInput.addEventListener("click", EditToDo); // save edit edende
    selectTransferToDo.addEventListener("click", isSelectTransferToDo); // 
    selectDeleteToDo.addEventListener("click", isSelectDeleteToDo)
}

function EditToDo(e) {   // save edit edende
    let saveEdit = document.createElement('i');
    saveEdit.className = "fas fa-download save-todo";
    e.target.parentElement.appendChild(saveEdit);
    saveEdit.addEventListener("click", saveEditValue);
}
function saveEditValue(e) { e.target.style.display = "none" };

// transfer to do  to completed module
function isSelectTransferToDo(e) {
    e.target.parentElement.remove();
    completedToDoListModule.appendChild(e.target.parentElement);
 
}
function isEnterCompletedTodoModule() { completedToDoListModule.style.display = "block"; }
function isCloseComplete() { completedToDoListModule.style.display = "none"; }

// isSelectDeleteToDo

function isSelectDeleteToDo(e){ //sil
   arr.push(e.target);
}
// delete todo
function isDeleteToDo(){
    let select = toDoListContainer.querySelector(".sel");
    if(select.checked){
        select.parentElement.remove();
    }
}
// module

function isDeleteToDoForCompletedModule(){
    let sel = completedToDoListModule.querySelector(".sel");
    console.log(completedToDoListModule)
    if(sel.checked){
        sel.parentElement.remove();
    }
   
}
