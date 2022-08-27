//

const ashutosh = [
  "Ashutosh",
  "Pandey",
  24,
  "Software Developer",
  ["Ashu", "Ashutosh", "Shivani"],
];

//WE NEED TO SPECIFY THAT FIRST LINE IS FIRST NAME.
//WE CAN'T DO IT IN ARRAYS.

//WE CAN USE MAKE OF OBJECTS -> KEY, VALUE PAIR
const ashu = {
  firstName: "Ashutosh",
  lastName: "Pandey",
  age: 24,
  job: "Software Developer",
  friends: ["Ashutosh", "Pandey", "Shivani"],
};

//firstName -> property : 'Ashutosh'

console.log(ashu);

//RETRIVING A PROPERTY
console.log(ashu.firstName);
console.log(ashu["lastName"]);

// . -> need to use real property name
// [] can use for computed property name

let nameKey = "Name";
console.log(ashu["first" + nameKey]);
ashu.location = "Bengaluru";
ashu["email - id"] = "ashutoshdev16@gmail.com";

console.log(ashu);

//OBJECT METHODS

const ashutoshDetails = {
  firstName: "Ashutosh",
  lastName: "Pandey",
  birthYear: 1998,
  job: "Software Development Engineer",
  friends: ["Srikantan", "Deepak", "Mani", "Dheeraj"],
  hasDriversLicense: true,
  calcAge: function (birthYear) {
    return 2022 - this.birthYear;
  },
};
console.log(ashutoshDetails.calcAge());
console.log(ashutoshDetails["calcAge"]());
