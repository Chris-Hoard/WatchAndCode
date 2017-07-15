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
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function(){
        console.log(this.todos);
    },
    addTodos: function(addItem){
         this.push(addItem);
         this.displayTodos();
    },
    changeTodos: function(position,newValue){
         this.todos[position] = newValue;
         this.displayTodos();
    },
    removeTodos: function(position){
        this.splice(position,1);
        this.displayTodos();
    }
    
};

todoList.displayTodos();
todoList.addTodos("item 4");
todoList.changeTodos(0,'item 1 updated');
todoList.removeTodos(3);

