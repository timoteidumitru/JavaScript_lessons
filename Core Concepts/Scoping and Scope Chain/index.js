// Lecture: Scoping

// lexical scoping
var a = "Hello!";
first();

function first() {
  var b = "Sup!";
  second();

  function second() {
    var c = "Yo!";
    third(c);
    console.log(a + "\n" + b);
  }
}

function third(c) {
  var d = "Hi!";
  console.log(c);
}
