var year, johnsYear, mikesYear, jensYear;
now = 2020;
johnsAge = now - 30;
mikesAge = now - 20;
jensAge = now - 27;

console.log(johnsAge);

// Math operators
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// logical operators

var johnOlder = johnsAge < mikesAge;
console.log(johnOlder);

// typeof operators
console.log(typeof johnOlder);
console.log(typeof johnsAge);
console.log(typeof "Mark is older then John");
var x;
console.log(typeof x);

// operator precedence
var fullAge = 18;
var isFullAge = now - johnsAge >= fullAge; // true
console.log(isFullAge); // true
