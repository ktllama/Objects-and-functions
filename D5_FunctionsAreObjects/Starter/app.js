//most fundamental important concept to deeply understanding js

//FIRST CLASS FUNCTIONS- in javascript functions are objects
//functions are objects that include other objects, other functions/methods and properties- they also have special properties such as the invokable code you write and you can choose whether to give it a name or make it annonymous

function greet()//thename 
{
    console.log('hi'); //the code/body- needs to be invoked
}

//now we will add a property to the function

greet.language = 'english';
console.log(greet); //you will get the text of the function you wrote but if you try and find that property using the . operator its there
console.log(greet.language); //will return english
console.log(greet())//invokes the code so it returns hi