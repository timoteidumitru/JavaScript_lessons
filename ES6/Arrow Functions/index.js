// Lecture: Arrow Functions

// Basics of Arrow Function

const years = [1990, 1992, 1994, 1989, 1988];

// ES5
var ages5 = years.map(function (el) {
  return 2020 - el;
});
// console.log(ages5);

// ES6
let ages6 = years.map((el) => 2020 - el);
// console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1} is: ${2020 - el}`);
// console.log(ages6);

ages6 = years.map((el, index) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - el;
  return `Age element ${index + 1} is: ${2020 - el}`;
});

// console.log(ages6);

// Deeper into Arrow Functions
