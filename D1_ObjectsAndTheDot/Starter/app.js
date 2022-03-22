//!not the prefered way to create an object but an intro

var person = new Object();

//!computed member access operator
//in the [] is the name of the value trying to locat
person["firstname"] ="Tony";
person["lastname"] = "alice";

//since it doesnt exist yet it will create that name value pair and keep it in memory to reference

//you can then assing a var string to a proprety and use the variable access the property using thee property bracket notation or operator

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

//! DOT OPERATOR -member access
//members are the pieces/properties of the object

console.log(person.firstname);
console.log(person.lastname);

//! attaching an object to an object as a property

person.address = new Object();
person.address.street = "322 sumter st";
person.address.city = "Charleston";
person.address.state = "SC";

console.log(person.address.city); 
//easier way to writ

console.log(person["address"]["street"]);
//doing the same thing but takes longer to write

//!always use the . operator unless you need to use some sort of dynamic string

