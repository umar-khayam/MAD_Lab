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
  v.className='list_items'
  v.innerText=data;
  v.appendChild(checkbox_create())
  list.appendChild(v)
  console.log(v)
}

function checkbox_create() {
  const checkbox=document.createElement("input")
  checkbox.setAttribute("type", "checkbox");
  return checkbox;
}

function removeTodo() {  
  const val = document.querySelectorAll('.list_items');
  var arr=Array.from(val)
  let count = 0;
    
  arr.forEach(
    (item)=>{
    count+=1;
      if(count == arr.length)
    {
    list.removeChild(item);
    }
  })
}

