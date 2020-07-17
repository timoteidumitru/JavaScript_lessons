// Initialize new array
var names = ["John", "Mike", "Jess"];
var years = new Array(1990, 1977, 1997);

// console.log(names[1]);
// console.log(names.length);

// Mutate array data
names[1] = "Mary";
names[names.length] = "Alan";
// console.log(names);

// different data types
var john = ["John", "Smith", 1990, "designer", false];

john.push("green");
john.unshift("Mr");
// console.log(john);

john.pop();
john.pop();
john.shift();

console.log(john);

console.log(john.indexOf(1990));

var isDesigner =
  john.indexOf("designer") === -1
    ? "John is not a designer"
    : "Apparently is a designer";
console.log(isDesigner);
