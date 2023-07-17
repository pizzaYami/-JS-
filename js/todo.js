const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleltToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function createToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newToDo;
  button.innerText = "❌";
  toDoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
  button.addEventListener("click", deleltToDo);
  toDos.push(newToDo);
  saveToDos();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  createToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("todos");

if (toDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach((item) => {
    createToDo(item);
  });
}
