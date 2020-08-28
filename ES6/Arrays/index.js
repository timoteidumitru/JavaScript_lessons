// Lecture: Arrays

const boxes = document.querySelectorAll(".box");

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxes.forEach(function (curr) {
  curr.style.backgroundColor = "lightblue";
});

// ES6 - 'from method'
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach((cur) => (cur.style.backgroundColor = "lightgreen"));

//ES5
// for (var i = 0; i < boxesArr5.length; i++) {
//   if (boxesArr5[i].className === "box blue") {
//     continue;
//   }
//   boxesArr5[i].textContent = "I've change it to blue";
// }

// ES6 - 'for of loop'
for (const cur of boxesArr6) {
  if (cur.className.includes("blue")) {
    continue;
    // break;
  }
  cur.textContent = "I've change it to green";
}

// ES5
var ages = [10, 12, 13, 14, 17, 19, 21, 25, 29];
var fullAge = ages.map(function (curr) {
  return curr >= 18;
});
// console.log(fullAge);
// console.log(fullAge.indexOf(true));
// console.log(ages[fullAge.indexOf(true)]);

// ES6 - (findIndex / find) methods
console.log(ages.findIndex((curr) => curr >= 18));
console.log(ages.find((cur) => cur >= 18));
