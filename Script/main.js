const toDoListContainer = document.querySelector(".to-do-list-container");
const addToDo = toDoListContainer.querySelector(".add-to-do");
const toDoInput = toDoListContainer.querySelector(".to-do-input");
const deleteItem = document.querySelector(".delete-to-do");
const completeItem = toDoListContainer.querySelector(".complete-item");
const completeModule = document.querySelector(".complete-module");
const closeComplete = document.querySelector(".close-complete");
addToDo.addEventListener("click", addToDoButton);
deleteItem.addEventListener("click", deleteItemButton)
completeItem.addEventListener("click", completeItemButton);
closeComplete.addEventListener("click", closeCompleteButton);

function addToDoButton(){
 
    console.log(0);
    let toDoItem = document.createElement('div')
    let inputToDo = document.createElement('input');
    let inputRadio = document.createElement("input");
   

    toDoItem.className = "to-do-list";
    inputToDo.className = "input-to-do"
    inputRadio.type = "checkbox";
    inputRadio.className = "radio-button";
    inputToDo.value = toDoInput.value;
    toDoInput.value = "";
    toDoItem.appendChild(inputRadio);
    toDoItem.appendChild(inputToDo);
    toDoListContainer.appendChild(toDoItem);
    inputToDo.addEventListener("click", saveToDoItem);
    inputRadio.addEventListener("click", selectToDoItem)
  
}

function saveToDoItem(e){
    let saveToDo = document.createElement('i');
    saveToDo.className = "fas fa-download save-to-do";
    e.target.parentElement.appendChild(saveToDo);
    saveToDo.addEventListener("click", saveToDoInputValue);
}

function saveToDoInputValue(e){
    e.target.style.display="none";
}

let arr = [];

function selectToDoItem(e){
  console.log(e.target);
  arr.push(e.target);
  console.log(arr);
  console.log(e.target.parentElement)

  if(arr.length >0 ){
    deleteItem.style.display = "block";
  }
 
}


function deleteItemButton(){
    for(i=0; i< arr.length; i++){
        console.log(arr[i]);
        if(arr[i].checked){
            arr[i].parentElement.remove();
        }
    }
}

function completeItemButton(){completeModule.style.display = "block";}
function closeCompleteButton(){completeModule.style.display = "none";}








