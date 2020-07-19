// Lecture: Hoisting

// function declaration
// findBirthYear(38);

function findBirthYear(age) {
  console.log(2020 - age);
}
// findBirthYear(30);

// functions expression
// retirement(1990);

var retirement = function (age) {
  console.log(67 - (2020 - age));
};

// retirement(1982);

// Variables

console.log(age);
var age = 32;
// console.log(age);

function foo() {
  var age = 30;
  console.log(age);
}
foo();
console.log(age);
