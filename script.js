var todovalue = document.getElementById("newTodoInput");
var btn = document.getElementById("addTodoBtn");
var ol = document.getElementById("todoList");

function addTodo(){
	if(todovalue.value){
		var li = document.createElement("li");
		li.textContent = todovalue.value;
		ol.appendChild(li);
		todovalue.value = "";
	}
}
