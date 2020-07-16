var height;

height = 21;

if (height || height === 0) {
  console.log("Variable is defined");
} else {
  console.log("Variable has NOT been defined");
}

// Equality operators
if (height == "22") {
  console.log("The == operator does type coercion");
} else {
  console.log("The == operator does NOT type coercion");
}
