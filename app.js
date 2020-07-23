var list = document.getElementById("list");
function addTodo(){
  //Add item
  var todoItem = document.getElementById("todo-item");
  var li = document.createElement("li");
  var liText = document.createTextNode(todoItem.value);
  li.appendChild(liText);

  //Delete Button
  var delBtn = document.createElement("button");
  var delText = document.createTextNode("Delete");
  delBtn.setAttribute("class","btn");
  delBtn.setAttribute("onclick","delItem(this)");
  delBtn.appendChild(delText);
  li.appendChild(delBtn);

  //Edit Button
  var editBtn = document.createElement("button");
  var editText = document.createTextNode("Edit");
  editBtn.appendChild(editText);
  editBtn.setAttribute("class","btn1");
  editBtn.setAttribute("onclick","editItem(this)");
  li.appendChild(editBtn);
  list.appendChild(li);
  todoItem.value = "";
}

function delItem(e){
  e.parentNode.remove();
}

function delAll(){
  list.innerHTML = "";
}

function editItem(e){
  var val = e.parentNode.firstChild.nodeValue ;
  var editValue = prompt("Enter edit value", val);
  e.parentNode.firstChild.nodeValue = editValue ;
}