/*
Let's remember the first coding challenge  where Mike and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create and object with properties for theirs fullname, mass, and height.
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, togeder with full names and the respective BMIs. Don't forget they might have the same BMI.

REMEMBER: BMI = mass / (height * height). (mass in KG and height in meter).

GOOD LUCK
*/

// asign the key-values pairs for each person in objects
var john = {
  firstName: "John",
  lastName: "Smith",
  mass: 74,
  height: 1.77,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
  },
};

var mike = {
  firstName: "Mike",
  lastName: "Owen",
  mass: 71,
  height: 1.77,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
  },
};

john.calcBMI();
mike.calcBMI();

// console.log(Math.floor(john.BMI) + " | " + Math.floor(mike.BMI));

// calculate which one of them have the heighest BMI
if (Math.floor(john.BMI) > Math.floor(mike.BMI)) {
  console.log(
    "  >>  " +
      john.firstName +
      " " +
      john.lastName +
      " apparently have a higher BMI then " +
      mike.firstName +
      " " +
      mike.lastName +
      "  <<  "
  );
  console.log(
    mike.firstName + " " + mike.lastName + " BMI:  " + Math.floor(mike.BMI)
  );
  console.log(
    john.firstName + " " + john.lastName + " BMI:  " + Math.floor(john.BMI)
  );
} else if (Math.floor(john.BMI) < Math.floor(mike.BMI)) {
  console.log(
    "  >>  " +
      mike.firstName +
      " " +
      mike.lastName +
      " apparently have a higher BMI then " +
      john.firstName +
      " " +
      john.lastName +
      "  <<  "
  );
  console.log(
    mike.firstName + " " + mike.lastName + " BMI:  " + Math.floor(mike.BMI)
  );
  console.log(
    john.firstName + " " + john.lastName + " BMI:  " + Math.floor(john.BMI)
  );
} else {
  console.log(
    "  >> Hah, apparently is a tie of: " + Math.floor(john.BMI) + " BMI  <<"
  );
  console.log(
    mike.firstName + " " + mike.lastName + " BMI:  " + Math.floor(mike.BMI)
  );
  console.log(
    john.firstName + " " + john.lastName + " BMI:  " + Math.floor(john.BMI)
  );
}
