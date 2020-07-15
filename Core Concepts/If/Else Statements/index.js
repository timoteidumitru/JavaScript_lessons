// If else Statements

var firstName = "John";
var civilStatus = "single";

if (civilStatus === "merried") {
  console.log(firstName + "is married!");
} else {
  console.log(firstName + " is currently " + civilStatus);
}

// solve the BMI challenge in a smarter way

var JohnMass = 72;
var JohnHeight = 1.74;
var MikeMass = 77;
var MikeHeight = 1.7;

// calculate BMI's
var JohnBMI = JohnMass / (JohnHeight * JohnHeight);
console.log(JohnBMI);

var MikeBMI = MikeMass / (MikeHeight * MikeHeight);
console.log(MikeBMI);

// check who have higher BMI
var higherBMI = JohnBMI > MikeBMI;
console.log(higherBMI);

// print out the value of who have higher BMI

// console.log(
//   "is John's BMI" +
//     "(" +
//     JohnBMI +
//     ")" +
//     " higher then Mike's BMI" +
//     "(" +
//     JohnBMI +
//     ")" +
//     "? " +
//     higherBMI
// );

// using if/else statements
if (JohnBMI > MikeBMI) {
  console.log("John's BMI is higher then Mike's");
} else {
  console.log("Mike's BMI is higher then John's");
}
