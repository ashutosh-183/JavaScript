console.log("Lifting Weights 1");
console.log("Lifting Weights 2");
console.log("Lifting Weights 3");
console.log("Lifting Weights 4");
console.log("Lifting Weights 5");
console.log("Lifting Weights 6");
console.log("Lifting Weights 7");
console.log("Lifting Weights 8");
console.log("Lifting Weights 9");
console.log("Lifting Weights 10");

//THE ABOVE CODE REPRESENTS -> DRY -> DON'T REPEAT YOURSELF

for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weight repitition ${i}`);
}

//LOOP ARRAYS
const ashutoshDetails = [
  "Ashutosh",
  "Pandey",
  1998,
  "Software Development Engineer",
  ["Srikantan", "Deepak", "Mani", "Dheeraj"],
  true,
];

for (let i = 0; i < ashutoshDetails.length; i++) {
  console.log(ashutoshDetails[i] + " " + typeof ashutoshDetails[i]);
}

let x = 0;

for (let i = 0; i <= 10; i++) {
  if (x >= 5) {
    break;
  }
  x += i;
}
console.log(x);
for (let i = 0; i <= 10; i++) {
  if (i == 3 || i % 3 == 0) {
    continue;
  }
  console.log(i);
}

//PRINTING BACKWARDS
for (let i = ashutoshDetails.length - 1; i >= 0; i--) {
  console.log(ashutoshDetails[i]);
}

//NESTED LOOPS
for (let i = 2; i <= 2; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} == ${i * j}`);
  }
}

//WHILE LOOP
x = 1;
while (x < 100) {
  x *= 10;
  console.log(x);
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  dice = Math.trunc(Math.random() * 6) + 1;
  console.log(`You rolled ${dice}`);
}
