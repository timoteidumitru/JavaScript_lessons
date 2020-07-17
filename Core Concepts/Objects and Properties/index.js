// object literal
var john = {
  firstName: "John",
  lastName: "Smith",
  age: 28,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "Teacher",
  isMarried: false,
};

// console.log(john.job);
// console.log(john["lastName"]);
john.job = "designer";
john.isMarried = true;
// console.log(john);

// new Object syntax
var jane = new Object();

jane.firstName = "Jane";
jane.LastName = "Smith";
jane.age = 27;
// console.log(jane);

// Objects Methods
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "Teacher",
  isMarried: false,
  calcAge: function () {
    this.age = 2020 - this.birthYear;
  },
};

john.calcAge();
console.log(john);
