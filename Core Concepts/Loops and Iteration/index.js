// the for loop
for (var i = 1; i <= 10; i++) {
  // console.log("we are in a loop now " + i);
}

var john = ["john", "smith", 1990, "developer", true, 2];
for (i = 0; i < john.length; i++) {
  // console.log(john[i]);
}

// while loop
var i = 0;
while (i < john.length) {
  // console.log(john[i]);
  i++;
}

// continue and break statements
var john = ["john", "smith", 1990, "developer", true, "blue"];

for (i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") continue;
  // console.log(john[i]);
}

for (i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") break;
  // console.log(john[i]);
}

// loop backwards
for (i = john.length; i >= 0; i--) {
  console.log(john[i]);
}
