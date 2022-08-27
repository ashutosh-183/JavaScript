//testcase 1

let johnHeight = 1.69;
let johnMass = 78;

let markHeight = 1.95;
let markMass = 92;

let johnBmi = johnMass / (johnHeight * johnHeight);
let markBmi = markMass / (markHeight * markHeight);

if (markBmi > johnBmi) {
  console.log("Mark has higher bmi");
} else {
  console.log("John has higher bmi");
}

//testcase 2
johnHeight = 1.88;
johnMass = 78;
markHeight = 1.76;
markBmi = 85;

johnBmi = johnMass / (johnHeight * johnHeight);
markBmi = markMass / (markHeight * markHeight);

if (markBmi > johnBmi) {
  console.log("Mark has higher bmi");
} else {
  console.log("John has higher bmi");
}
