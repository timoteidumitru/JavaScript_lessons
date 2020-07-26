// Function Constructor
/* 
john = {
  name: "John",
  yearOfBirth: 1990,
  job: "developer",
};

var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

// Inheritance / prototype chain
Person.prototype.calcAge = function () {
  console.log(2020 - this.yearOfBirth);
};

Person.prototype.lastName = "Smith";

var john = new Person("John", 1990, "teacher");
var jane = new Person("Jane", 1988, "designer");
var mike = new Person("Mike", 1977, "driver");
var mike = new Person("Tim", 1977, "student");

// console.log(jane, mike, john);

john.calcAge();
jane.calcAge();
mike.calcAge();

console.log(john.lastName, jane.lastName, mike.lastName);
*/

// Object.create
var personProto = {
  calcAge: function () {
    console.log(2020 - this.yearOfBirth);
  },
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "developer";
console.log(john);

var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1988 },
  job: { value: "teacher" },
});

console.log(jane);
