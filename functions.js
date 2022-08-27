function logger() {
  console.log("Welcome to functions in JS");
}
logger();

function addTwoNumbers(x, y) {
  console.log(x + y);
}
addTwoNumbers(90, 67);

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const fruitJuice = fruitProcessor(10, 5);
console.log(fruitJuice);

function calcAge(birthYear) {
  return 2022 - birthYear;
}

let age = calcAge(1998);
console.log(age);

//ARROW FUNCTIONS

const calAge = (birthYear) => 2022 - birthYear;
console.log(calAge(1999));

//FUNCTIONS CALLING ANOTHER FUNCTIONS
function getNoOfPieces(x) {
  return x * 4;
}
function getPieces(x) {
  let y = getNoOfPieces(x);
  return y;
}
console.log(getNoOfPieces(6));
