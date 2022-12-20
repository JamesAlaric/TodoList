// //Selectors
// const todoInput = document.querySelector(".todo-input");
// const todoButton = document.querySelector(".todo-button");
// const todoList = document.querySelector(".todo-list");
// const filterOption = document.querySelector(".filter-todo");

// //Listeners
// document.addEventListener("DOMContentLoaded", getTodos);
// todoButton.addEventListener("click", addTodo);
// todoList.addEventListener("click", deleteCheck);
// filterOption.addEventListener("input", filterTodo);

// // Functions
// function addTodo(e) {
//   e.preventDefault();

//   // generate a todo DIV
//   // <div class="todo"></div>
//   const todoDiv = document.createElement("div");
//   todoDiv.classList.add("todo");

//   // li creation
//   const newTodo = document.createElement("li");
//   newTodo.innerText = todoInput.value;
//   newTodo.classList.add("todo-item");

//   // add li in div
//   // <div class="todo">
//   //     <li class="todo-item"></li>
//   // </div>
//   todoDiv.appendChild(newTodo);

//   //Add todo to localstorage
//   saveLocalTodos(todoInput.value);

//   // Button check
//   const completedButton = document.createElement("button");
//   completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
//   completedButton.classList.add("completed-button");
//   todoDiv.appendChild(completedButton);

//   //Button Delete
//   const trashButton = document.createElement("button");
//   trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
//   trashButton.classList.add("trash-button");
//   todoDiv.appendChild(trashButton);

//   //Add Todo to TodoList
//   todoList.appendChild(todoDiv);

//   //reinitialize TodoInput after adding task
//   todoInput.value = "";
// }

// function deleteCheck(ev) {
//   const item = ev.target;

//   // Delete Task
//   if (item.classList[0] === "trash-button") {
//     const todo = item.parentElement;
//     todo.classList.add("fall");
//     removeLocalTodos(todo);
//     todo.addEventListener("transitionend", function () {
//       todo.remove();
//     });
//   }

//   // Check Mark Task
//   if (item.classList[0] === "completed-button") {
//     item.parentElement.classList.toggle("completed");
//   }
// }

// function filterTodo(e) {
//   const todos = todoList.childNodes;
//   todos.forEach(function (todo) {
//     switch (e.target.value) {
//       case "all":
//         todo.style.display = "flex";
//         break;
//       case "completed":
//         if (todo.classList.contains("completed")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//         break;
//       case "uncompleted":
//         if (!todo.classList.contains("completed")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//         break;
//     }
//   });
// }

// function saveLocalTodos(todo) {
//   // check if items exist
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   todos.push(todo);
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// function getTodos() {
//   //Print todo stocked in localStorage
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }

//   todos.forEach(function (todo) {
//     const todoDiv = document.createElement("div");
//     todoDiv.classList.add("todo");
//     const newTodo = document.createElement("li");
//     newTodo.innerText = todo;
//     newTodo.classList.add("todo-item");
//     todoDiv.appendChild(newTodo);
//     const completedButton = document.createElement("button");
//     completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
//     completedButton.classList.add("completed-button");
//     todoDiv.appendChild(completedButton);
//     const trashButton = document.createElement("button");
//     trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
//     trashButton.classList.add("trash-button");
//     todoDiv.appendChild(trashButton);
//     todoList.appendChild(todoDiv);
//   });
// }

// function removeLocalTodos(todo) {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   const todoIndex = todo.children[0].innerText;
//   todos.splice(todos.indexOf(todoIndex), 1);
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

function sum(a,b){
  return a+b;
}

module.exports=sum;