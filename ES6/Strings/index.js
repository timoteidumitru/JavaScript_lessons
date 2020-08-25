// Lecture: Strings

let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1992;

function calcAge(year) {
  return 2020 - year;
}

// ES5
console.log(
  "This is " +
    firstName +
    " " +
    lastName +
    ", was born in " +
    yearOfBirth +
    ". Today, he is " +
    calcAge(yearOfBirth) +
    " years old."
);

// ES6
console.log(
  `This is ${firstName} ${lastName}, 
was born in ${yearOfBirth}. 
Today, he is ${calcAge(yearOfBirth)} years old.`
);

const myName = `${firstName} ${lastName}`;
console.log(myName.startsWith("J"));
console.log(myName.endsWith("k"));
console.log(myName.includes(" "));
console.log(`${firstName} `.repeat(5));
