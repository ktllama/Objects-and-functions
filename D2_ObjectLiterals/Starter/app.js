//more than one way to create objects
//short hand for creating objects is through object literals
//assigning a var to {} is the same as creating a new object

//this is creating an empty object named person
var person = {};
console.log(person);

//initialize the object by setting up properties and methods
//use name value pairs seporated by commas

var me = { 
    firstname: "Katie", 
    lastname: "Costantin",
    address: {
        street: "sumter st",
        city: "Charleston",
        state: "SC"
    }
 };

 console.log(me);
 //you can create an object anywhere you can create any other variable on the fly
 
 function greet(person){
     console.log(`Hi ${person.firstname}`);
 }
//initiating the function and passing the me obj as parameter
 greet(me);

 //can also call the greet function and create an object on the fly to pass as param- same as passing a number or string
 greet({ firstname: "mary", lastname: "jane"});

 //can add new properties to existing objects using the . operator

 me.favorites = {
     color: "yellow",
     animal: "llama",
     food: "rice"
 }

 console.log(me.favorites.color);



