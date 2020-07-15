var firstName = "Joe";
var age = 16;

// ternary operator
age >= 18
  ? console.log(firstName + " can drink beer!")
  : console.log(firstName + "is not allowed to drink alcohol!");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

// switch statements
var job = "teacher";
switch (job) {
  case "teacher":
  case "instructor":
    console.log(firstName + " teaches kids how to code");
    breake;
  case "driver":
    console.log(firstName + " drives an uber in London");
    breake;
  case "designer":
    console.log(firstName + " is a web designer");
    breake;
  default:
    console.log(firstName + "does something else");
}
