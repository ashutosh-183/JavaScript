const firstName = "Ashutosh";
const lastName = "Pandey";
const birthYear = 1998;

let ageAshutosh = 2022 - 1998;

const ashutoshInfo =
  "I'm " +
  firstName +
  " " +
  lastName +
  ", a Software Developer and my age is" +
  " " +
  ageAshutosh +
  "!";

console.log(ashutoshInfo);

//USING template literals -> Introduced in ES6

const ashutoshNewInfo = `I'm ${firstName} ${lastName} working as Software Developer at Jio HealthHub and my age is ${ageAshutosh}`;

let str = `Ashutosh wants to work at a better organisation`;
console.log(str);

// Print string in multiple lines
console.log("Ashutosh Pandey\nSoftware Developer\nAge = 24");

console.log(`Ashutosh Pandey
Software Developer
24`);
