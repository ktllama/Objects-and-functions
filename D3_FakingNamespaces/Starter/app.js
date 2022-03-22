var greet = 'Hello!';
var greet = 'Hola!'; 

console.log(greet);

//since js doesnt have name spaces to container variable names so they dont over lap we can put them in a container by creating an object

var english = {};
var spanish = {};

english.greet = 'Hello!';
spanish.greet = 'Hola!';

console.log(english);

//this variable has now become a container to make sure it doesnt collide with other things
//this is where object literal syntax is powerful
//cannot create properties on the fly using this method

//english.greetings.greet = 'Hello'; This will returned undefined becasue there is no greetings property in the empty object above, only greet- but you can create a new container like so

english.greetings={};
english.greetings.greet = 'Hello';
console.log(english);

//or when you initialize this container you can use obj literal syntax to define properties

var english = {
    greetings: { 
        basic: 'Hello! '
    }
};

console.log(english);

//the idea here is i have CONTAINED my properties, variables, functions and methods and other objects inside a container object- keeping it seporate from any other code or object sitting in the global name space

