// Lecture: Default Parameter

// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? (lastName = "Smith") : lastName;
  nationality === undefined ? (nationality = "UK") : nationality;

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

// var john = new SmithPerson("John", 1990);
// // console.log(john);
// var emily = new SmithPerson("Emily", 1988, "Dias");
// // console.log(emily);

// ES6
function SmithPerson(
  firstName,
  yearOfBirth,
  lastName = "Smith",
  nationality = "UK"
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson("John", 1990);
console.log(john);
var emily = new SmithPerson("Emily", 1988, "Dias", "Spanish");
console.log(emily);
