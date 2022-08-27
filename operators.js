// Operators

const birthYear = 1998;
let currentYear = 2022;
console.log(currentYear - birthYear);

//multiplication
let a = 5;
let b = 2;
console.log(a * b);

//exponentiation
console.log(a ** b);

//division
console.log(a / b);

let x = 10;
x = x + 5;
x += 5;
console.log(x);

x *= 5;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);
--x;
console.log(x);
++x;
console.log(x);

console.log(45 < 56);
console.log(56 > 76);

// Operator Precedence
const now = 2022;
const ageAshutosh = now - 1998;
const agePritha = now - 1999;
//check mdn website -> mozilla developer network
console.log(now - 1998 > now - 1999);

//execution
// first (now - 1998)
//second (now - 1999)
// at end (first > second);
let c, d;
c = d = 20 - 34 - 6;
console.log(c + " " + d);

//first -> calculations are performed and at the end assignment is done

let avg = ageAshutosh + agePritha / 2;
console.log(avg);

//first agePritha / 2
//second ageAshutosh + first;
//third assignment avg = second;

avg = (ageAshutosh + agePritha) / 2;
console.log(avg);
//first (ageAshutosh + agePritha)
//second first/2;
//third avg = second;
