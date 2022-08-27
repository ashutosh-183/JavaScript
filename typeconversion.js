// Type conversion & Type coercion(internal type converison)

const inputYear = "1998";

// concatenates as it is string.
// console.log(inputYear + 67);

let inputYearInNumber = Number(inputYear);

console.log(typeof inputYearInNumber);
console.log(typeof inputYear);

console.log(inputYear, inputYearInNumber);
console.log(Number("Ashutosh"));

console.log(String(24), 24);

//Number -> String
//String -> Number

//TYPE COERCION
console.log("Ashutosh " + 18); //automatically converts to string
console.log(18 + " Ashutosh"); //converts to string

console.log(18 + 3556.89);

//Not all are type coercion to string
// -, *, / triggers the number
// + triggers the strings
console.log("23" * "3");
console.log("21" / "3");
console.log("23" - "10" - 5);

let n = 11 + "45"; //converts to string;
console.log(n);
n = n - "1"; //converts to number;
console.log(n);
