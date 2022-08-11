//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck)

// Functions
function addTodo(e){
    e.preventDefault();

    // generate a todo DIV
    // <div class="todo"></div>
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // li creation
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");

    // add li in div 
    // <div class="todo">
    //     <li class="todo-item"></li>
    // </div>
    todoDiv.appendChild(newTodo);

    // Button check
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedButton.classList.add("completed-button");
    todoDiv.appendChild(completedButton);

    //Button Delete 
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);

    //Add Todo to TodoList
    todoList.appendChild(todoDiv);

    //reinitialize TodoInput after adding task
    todoInput.value = "";

}

function deleteCheck(ev){
    const item = ev.target;

    // Delete Task
    if(item.classList[0] === "trash-button"){
        item.parentElement.classList.add("fall");
        item.parentElement.classList.addEventListener("transition-end", function (){
            item.parentElement.remove();
        })
    }

    // Check Mark Task
    if(item.classList[0] === "completed-button"){
        item.parentElement.classList.toggle("completed");
    }
}
