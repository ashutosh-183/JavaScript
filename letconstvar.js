// let, const -> ES6

// var is old

let age = 24;
age = 25;

//the above is called reassigning
//or mutate
//empty
//above are the use cases for let

//CONST -> immutable
//cannot change
const birthYear = 1997;
// birthYear = 1998; //type error
console.log(birthYear);
//values that never change will use const

//var can also be used as let
var jobTitle = "SystemEngineer";
jobTitle = "Software Development Enginner";

//var - function scope
//let - block scope
