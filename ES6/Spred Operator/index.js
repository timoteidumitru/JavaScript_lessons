// Lecture: Spred Operator

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(13, 14, 30, 38);
// console.log(sum1);

// ES5

var ages = [13, 14, 30, 38];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ["John", "Jane", "Holly"];
const familyMiller = ["Mike", "Jake"];
const bigFamily = [...familySmith, "Helen", ...familyMiller];
console.log(bigFamily);

const h = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");

const all = [h, ...boxes];
console.log(all);

Array.from(all).forEach((cur) => (cur.style.color = "purple"));
