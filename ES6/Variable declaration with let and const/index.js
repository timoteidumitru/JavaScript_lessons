// Lecture: let and const

// ES5 - variables
var name5 = "Jane Smith";
var age = 28;
name5 = "Jane Miller";
// console.log(name5);

// ES6 - variables
const name6 = "Jane Smith";
let ages = 29;
// name6 = "Jane Doe";
// console.log(name6);

// ES5 - functions
function driverPassTheTest5(passedTest) {
  if (passedTest) {
    var firstName = "John Smith";
    var yearOfBirth = 1992;
  }
  // console.log(
  //   firstName +
  //     ", " +
  //     "born in " +
  //     yearOfBirth +
  //     " and is now officialy allowed to drive a car"
  // );
}

driverPassTheTest5(true);

// ES6 - function
function driverPassTheTest6(passedTest) {
  let firstName;
  const yearOfBirth = 1992;

  if (passedTest) {
    firstName = "John Smith";
  }
  // console.log(
  //   firstName +
  //     ", " +
  //     "born in " +
  //     yearOfBirth +
  //     " and is now officialy allowed to drive a car"
  // );
}

driverPassTheTest6(true);

// different variable
let i = 29;

for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

// same variable
var j = 29;

for (var j = 0; j < 5; j++) {
  console.log(j);
}
console.log(j);
