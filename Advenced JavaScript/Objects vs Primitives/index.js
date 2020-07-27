// primitives
var a = 23;
var b = a;

a = 47;

// console.log(a, b);

// objects
var obj1 = {
  name: "John",
  age: 22,
};

var obj2 = obj1;

obj1.age = 44;

// console.log(obj1.age);
// console.log(obj2.age);

// functions

var age = 30;
var obj = {
  name: "Tim",
  city: "London",
};

function change(a, b) {
  a = 20;
  b.city = "Mancester";
}

change(age, obj);

console.log(age);
console.log(obj.city);
