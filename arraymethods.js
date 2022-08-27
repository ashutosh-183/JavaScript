const friends = ["Ashutosh", "Ashu", "Kumar", "Pandey"];
console.log(friends);
console.log(friends.length);
//PUSH METHOD -> TO ADD ELEMENT AT THE END
friends.push("Shivani");
console.log(friends);
console.log(friends.length);

//UNSHIFT -> TO ADD AT THE BEGINNING
friends.unshift("Krishna");
console.log(friends);
console.log(friends.length);

//POP -> REMOVE THE LAST ELEMENT OF THE ARRAY
friends.pop();
console.log(friends);
console.log(friends.length);

//SHIFT -> TO REMOVE THE FIRST ELEMENT OF THE ARRAY
friends.shift();
console.log(friends);
console.log(friends.length);

//INDEX OF -> RETURNS THE INDEX AT WHICH THE ELEMENT IS LOCATED
console.log(friends.indexOf("Pandey"));
console.log(friends.indexOf("Shivani")); // not present so returns -1

//INCLUDES RETURN TRUE OR FALSE FOR ELEMENTS PRESENT
if (friends.includes("Shivani")) {
  console.log("You have a friend called Shivani");
} else {
  console.log("You don't have a friend called Shivani");
}
