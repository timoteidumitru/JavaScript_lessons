var firstName = "John";
var age = 30;

// Type coercion

console.log(firstName + " " + age);

var job, isMarried;
job = "teacher";
isMarried = false;

console.log(
  firstName +
    " is a " +
    age +
    "years old" +
    job +
    ". Is he married? " +
    isMarried
);

// Variable mutation

age = "twenty eight";
job = "driver";
alert(
  firstName +
    " is a " +
    age +
    "years old" +
    job +
    ". Is he married? " +
    isMarried
);

// Note!
// Type coercion is the process of converting value from one type to another(such as string to number, object to boolean, and so on).
// Any type, be it primitive or an object, is a valid subject for type coercion. To recall, primitives are: number, string, boolean, null, undefined + Symbol (added in ES6)
