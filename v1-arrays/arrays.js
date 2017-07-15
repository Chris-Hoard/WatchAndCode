//V1 - Arrays
var todos = ['item 1', 'item 2', 'item 3'];

displayTodos();

addTodos("item 4");

changeTodos(0,'item 1 updated');
removeTodos(3);

//todos.push('item 4');
//displayTodos();

//todos[0] = 'item 1 updated';
//displayTodos();

//todos.splice(3,1);
//displayTodos();
//V2 Functions

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