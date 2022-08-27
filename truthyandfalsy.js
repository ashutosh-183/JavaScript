//falsy values are not falsy values but eill beccome false when converted to boolean

//They are
// 1. 0
// 2. ''
// 3. undefined
// 4. null
// 5. NaN

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean({}));

console.log(Boolean("Ashutosh"));
console.log(Boolean(1));
console.log(Boolean(-1));

//type coercion -> 2 scenarioes
// 1. Logical operators
// 2. While making logical decisions

let money = 100;
if (money) {
  console.log(`Don't spend all the money`);
} else {
  console.log(`You gotta get a job`);
}

let height = 170;
if (height) {
  console.log(`Your height is ${height} cms`);
} else {
  console.log("Please define your height");
}
