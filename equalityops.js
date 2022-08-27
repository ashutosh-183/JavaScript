// == vs ===

let age = 18;
if (age === 18) {
  console.log(`You have become major now`);
}

if ("18" === 18) {
  console.log("You have become major now");
} else {
  console.log("You are not a major yet");
}

//  === -> does not do type coercion
// == -> does type coercion

// '12' === 12 false

// 12 === 12 true

// '12' == 12  -> true
// 12 == 12 -> true

// === strict
// == loose
let guessNumber = 89;
if (guessNumber === 56) {
  console.log(`You have guessed my favorite number`);
} else {
  console.log("Better luck next time");
}
