// FizzBuzz

// first method
for (i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  else if (i % 5 === 0) console.log("Fizz");
  else if (i % 3 === 0) console.log("Buzz");
  else console.log(i);
}

// second method
for (var i = 1; i < 100; )
  console.log((++i % 3 ? "" : "Fizz ") + (i % 5 ? "" : "Buzz") || i);
