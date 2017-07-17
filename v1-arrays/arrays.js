//V10
var todoList = {
    todos: [],
    displayTodos: function(){
        if (this.todos.length === 0){
            console.log("Your todo list is empty!");
        }else{
             console.log("My Todos:");
            for(var i = 0; i < this.todos.length; i++){
                
                
                if (this.todos[i].completed === true){
                     console.log("(x)",this.todos[i].todoText);
                } else {
                    console.log("( )",this.todos[i].todoText);
                }
            }
        }
    },
    addTodos: function(newValue){
         this.todos.push({
             todoText:newValue,
             completed:false
             
         });
    },
    changeTodos: function(position,newValue){
        // this.todos[position] = newValue;
        this.todos[position].todoText = newValue;
    },
    removeTodos: function(position){
        this.todos.splice(position,1);
    },
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function(){
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        
        for(var i = 0; i < totalTodos; i++){
            if (this.todos[i].completed=== true){
                completedTodos++;
            }
        }
        for(var i = 0; i < totalTodos; i++){
            if (completedTodos === totalTodos){
                this.todos[i].completed = false;
            } else {
                this.todos[i].completed = true;
            }
            
        }
    }
    
};

var handlers = {
    addTodo: function(){
       var addTodoTextInput = document.getElementById("addTodoTextInput");
       todoList.addTodos(addTodoTextInput.value);
       addTodoTextInput.value = "";
       view.displayTodos();
    },
    changeTodo: function(){
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodos(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value="";
        changeTodoTextInput.value="";
        view.displayTodos();
    },
    removeTodo: function(position){
       
         todoList.removeTodos(position);
         view.displayTodos();
    },
     toggleAll: function(){
        todoList.toggleAll();
        view.displayTodos();
    },
    toggleCompleted: function(){
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value="";
        view.displayTodos();
    }
    
};
var view = {
   displayTodos: function(){
        var todosUL = document.querySelector('ul');
        todosUL.innerHTML="";
       for(var i=0; i<todoList.todos.length; i++){
            var todoLi = document.createElement('li');
            var toDo = todoList.todos[i];
            var todoTextWithCompletetion = "";
            if(toDo.completed === true){
                todoTextWithCompletetion = "(X) " + toDo.todoText;
            }else{
                todoTextWithCompletetion = "( ) " + toDo.todoText;
            }
            
            todoLi.id = i;
            todoLi.textContent= todoTextWithCompletetion;
            todoLi.appendChild(this.createDeleteButton());
            todosUL.appendChild(todoLi);
       }
       
       
   } ,
   createDeleteButton: function(){
       var deleteButton = document.createElement("button");
       deleteButton.textContent="Delete";
       deleteButton.className = "deleteButton";
       return deleteButton;
       },
    setUpEventListeners: function(){
        var todosUl = document.querySelector("ul");
        todosUl.addEventListener("click", function(event){
            var  elementClicked = event.target;
            
            if (elementClicked.className === "deleteButton"){
               handlers.removeTodo(parseInt(elementClicked.parentNode.id));
            }
            
        });
    }
};

view.setUpEventListeners();


/*
todoList.displayTodos();
todoList.addTodos("item 4");
todoList.changeTodos(0,'item 1 updated');
todoList.removeTodos(3);

//V7
todoList.displayTodos();
todoList.addTodos('first');
todoList.addTodos('second');
todoList.addTodos('third');
todoList.toggleCompleted(1);
todoList.toggleAll();
*/
//todoList.changeTodos(0,'Second try');
//todoList.toggleCompleted(0);


