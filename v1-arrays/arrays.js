//V1 - Arrays
//var todos = ['item 1', 'item 2', 'item 3'];

//displayTodos();

//addTodos("item 4");

//changeTodos(0,'item 1 updated');
//removeTodos(3);

//todos.push('item 4');
//displayTodos();

//todos[0] = 'item 1 updated';
//displayTodos();

//todos.splice(3,1);
//displayTodos();
//V2 Functions
/*
function displayTodos(){
    console.log('My Todos:',todos);
}

function addTodos(addItem){
    todos.push(addItem);
    displayTodos();
}

function changeTodos(position,newValue){
    todos[position] = newValue;
    displayTodos();
}

function removeTodos(position){
    todos.splice(position,1);
    displayTodos();
}
*/
//V3- Objects
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
         this.displayTodos();
    },
    changeTodos: function(position,newValue){
        // this.todos[position] = newValue;
        this.todos[position].todoText = newValue;
         this.displayTodos();
    },
    removeTodos: function(position){
        this.todos.splice(position,1);
        this.displayTodos();
    },
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
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
        this.displayTodos();
    }
    
};
/*
todoList.displayTodos();
todoList.addTodos("item 4");
todoList.changeTodos(0,'item 1 updated');
todoList.removeTodos(3);
*/
//V7
todoList.displayTodos();
todoList.addTodos('first');
todoList.addTodos('second');
todoList.addTodos('third');
todoList.toggleCompleted(1);
todoList.toggleAll();
//todoList.changeTodos(0,'Second try');
//todoList.toggleCompleted(0);


