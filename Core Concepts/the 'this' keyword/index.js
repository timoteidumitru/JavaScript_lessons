// Lecture: The 'this' keyword

// Regular function call: The 'this' keyword points at the global object,(the window onject, in the browser).

// Method call: the 'this' keyword points to the object that is calling the method

// The 'this' keyword is not asigned a value until a function where it is defined is actually called.

// console.log(this);

// calcAge(1990);

// function calcAge(year) {
//   console.log(2020 - year);
//   console.log(this);
// }

var john = {
  fulllname: "John Cena",
  yearBirth: 1980,
  calcAge: function () {
    console.log(this);
    // will point to window object
    function innerFunc() {
      console.log(this);
    }
    // innerFunc();
  },
};

// will point to John object
john.calcAge();

var mike = {
  fullName: "Mike Tyson",
  yearBirth: 1990,
};

// method borrowing
mike.calcAge = john.calcAge;
mike.calcAge();
