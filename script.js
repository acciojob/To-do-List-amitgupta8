//your code here
function addItem() { 
         var data = document.getElementById("newTodoInput").value; 
         if(data.length != 0){ 
                 var li = document.createElement("li"); 
                 li.innerHTML = data; 
                 document.getElementById("todoList").appendChild(li); 
         } 
         document.getElementById("newTodoInput").value = ""; 
 }