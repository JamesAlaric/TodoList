//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("input", filterTodo);

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

function deleteCheck(e){
    const item = e.target;

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

function filterTodo (e){
    const todos = todoList.childNodes;
    todos.forEach(function(){
        switch(e.target){
            case "all":
                todo.style.display = "flex";
                break
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else { 
                    todo.style.display = "none"
                }
                break
            case "uncomplete":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else { 
                    todo.style.display = "none"
                }
                break
        }
    })
}