//JSON AND OBJECT LITERALS
//JSON looks alot like obj literal syntax but there are some differences

var objectLiteral = {
    firstname: 'Mary',
    isAProgramer: true
}

console.log(objectLiteral);

//difference with json is it uses " " around properties as well as values
//anything that is json valid is also valid obj literal syntax but not all obj lit syntx is json valid

//to make a object a json object string use json.stringify

var stringMe = {
    firstname: 'Laura',
    lastname: 'blah',
    age: 20
};

console.log(JSON.stringify(stringMe));

//or if you want to take a string
//note double "" on inside and single '' on outside so they dont colide and cause an error
// use JSON.parse and it will take a string and convert it to a js object

var objectMe = JSON.parse('{"firstname":"Laura","lastname":"blah","age":20}');

console.log(objectMe);

//makes pushing and accepting data much easier