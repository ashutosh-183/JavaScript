const friend1 = "Ashu";
const friend2 = "Ashutosh";
const friend3 = "Kumar";
const friend4 = "Pandey";

const friends = ["Ashutosh", "Ashu", "Kumar", "Pandey"];
console.log(friends);

//ARRAYS CAN HOLD AS MANY AS VALUES WE WANT.

//CAN HOLF ANY TYPE OF VALUE.

const marks = new Array(36, 39, 34.5, "NIL", "Zero");

console.log(marks);

//element at index i
console.log(marks[0]);

console.log(friends[3]);

//length / size of the array
console.log(friends.length);
console.log(marks.length);

//last element of the array
console.log(marks[marks.length - 1]);

//updating element at index i
friends[2] = "Ashutosh";
console.log(friends);

//VARIABLES DECLARED WITH CONST CAN'T BE CHANGED
//ONLY PRIMITIVE VALUES ARE IMMUTABLE
//NOT ARRAYS

//ARRAYS WITH DIFFERENT KIND OF VALUES

const ashutosh = new Array(
  "Ashutosh",
  "Pandey",
  24,
  715000.0,
  "Software Developer"
);

console.log(ashutosh);

//using variables
let firstName = "Ashutosh";
let lastName = "Pandey";
let age = 24;
let salary = 715000.0;
let jobRole = "Software Developer";

const ashu = [firstName, lastName, age, salary, jobRole];
console.log(ashu);

//Calculate age and store in
function calculateAge(years) {
  const ages = new Array();
  let yearNow = 2022;
  for (let i = 0; i < years.length; i++) {
    ages.push(yearNow - years[i]);
  }
  return ages;
}
const years = [1997, 2000, 2001, 1998, 1999];
console.log(calculateAge(years));
