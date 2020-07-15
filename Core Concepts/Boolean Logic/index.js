var firstName = "john";
var age = 17;

if (age < 12) {
  console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) {
  console.log(firstName + " is a teenager!");
} else if (age >= 20 && age <= 30) {
  console.log(firstName + " is a young man!");
} else {
  console.log(firstName + " is a man.");
}
