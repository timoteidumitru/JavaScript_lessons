// Challenge
/*

Mike and John are trying to compare their BMI(Body Mass Index), which is calculated by using the formule: BMI = mass / (height * height)

1. Store Mike's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about weather Mike has higher BMI then John
4. Print a string to the console containing the variable from step 3. (Something like: "is Mike's BMI higher then John's? false")

*/

// declarations / asignaments
var JohnMass = 72;
var JohnHeight = 1.74;
var MikeMass = 77;
var MikeHeight = 1.7;

// calculayte BMI's
var JohnBMI = JohnMass / (JohnHeight * JohnHeight);
console.log(JohnBMI);

var MikeBMI = MikeMass / (MikeHeight * MikeHeight);
console.log(MikeBMI);

// check who have higher BMI
var higherBMI = JohnBMI >= MikeBMI;
console.log(higherBMI);

// print out the value of who have higher BMI

console.log(
  "is John's BMI" +
    "(" +
    JohnBMI +
    ")" +
    " higher then Mike's BMI" +
    "(" +
    JohnBMI +
    ")" +
    "? " +
    higherBMI
);
