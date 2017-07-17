//V11
var todoList = {
    todos: [],
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
        /*
        for(var i = 0; i < totalTodos; i++){
            if (this.todos[i].completed=== true){
                completedTodos++;
            }
        }*/
        this.todos.forEach(function(todo){
            if (todo.completed=== true){
                completedTodos++;
            }
        });
        
        this.todos.forEach(function(todo) {
            if (completedTodos === totalTodos){
                todo.completed=false;
                
            }else{
                todo.completed=true;
            }
        });
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
        
       todoList.todos.forEach(function(todo,position){
            var todoLi = document.createElement('li');
            var todoTextWithCompletetion = "";
            if(todo.completed === true){
                todoTextWithCompletetion = "(X) " + todo.todoText;
            }else{
                todoTextWithCompletetion = "( ) " + todo.todoText;
            }
            
            todoLi.id = position;
            todoLi.textContent= todoTextWithCompletetion;
            todoLi.appendChild(this.createDeleteButton());
            todosUL.appendChild(todoLi);
       },this);
       
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


