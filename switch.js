//Map activity based on test cases

const day = "monday";

switch (day) {
  case "sunday":
    console.log("It's the first day.");
    break;
  case "monday":
    console.log("It's the second day of the week");
    break;
  case "tuesday":
    console.log("It's the third day.");
    break;

  case "wednesday":
    console.log("It's the fourth week of the day");
    break;

  case "thursday":
    console.log("It's the fifth day of the week");
    break;

  case "friday":
    console.log("It's the sixth day of the week");

  case "saturday":
    console.log("It's the last day of the week");
    break;

  default:
    console.log("Please enter the valid");
    break;
}
