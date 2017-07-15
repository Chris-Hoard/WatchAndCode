//V1 - Arrays
var todos = ['item 1', 'item 2', 'item 3'];

console.log('My Todos:',todos);

todos.push('item 4');
console.log('My Todos:',todos);

todos[0] = 'item 1 updated';
console.log('My Todos:',todos);

todos.splice(3,1);
console.log('My Todos:',todos);
//V2 Functions

function sayHito(person){
    console.log("hi",person);
}

sayHito("Chris");