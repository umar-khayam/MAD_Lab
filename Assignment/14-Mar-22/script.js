const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");
var count=0;

function newTodo() {
  add_list()
  count+=1;
  itemCountSpan.innerHTML = count;
  uncheckedCountSpan.innerHTML = count;
}

function add_list() {
  const fname=document.getElementById('fname');
  const data = fname.value;
  const v=document.createElement("li");
  v.innerText=data;
  v.appendChild(checkbox_create())
  list.appendChild(v)
}

function checkbox_create() {
  const checkbox=document.createElement("input")
  checkbox.setAttribute("type", "checkbox");
  return checkbox;
}

function removeTodo() {  

}
