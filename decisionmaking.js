//Can a person take drivers license;

const birthYear = 2005;
const ageToTakeTest = 18;

if (2022 - birthYear >= 18) {
  console.log(`You can take the test`);
} else {
  console.log(
    `${
      18 - (2022 - birthYear)
    } year/s are left to take driver license test for you`
  );
}
