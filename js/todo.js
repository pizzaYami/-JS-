const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleltToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos.filter((item) => {
    item.id !== parseInt(li.id);
  });
  saveToDos();
}

function createToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newToDo.text;
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
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDoInput.value = "";
  createToDo(newToDoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("todos");

if (toDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach((item) => {
    createToDo(item);
  });
}

console.log(savedToDos);
