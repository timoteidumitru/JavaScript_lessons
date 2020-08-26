// Lecture: Arrow Functions

// Basics of Arrow Function

const years = [1990, 1992, 1994, 1989, 1988];

// ES5
var ages5 = years.map(function (el) {
  return 2020 - el;
});
// console.log(ages5);

// ES6
let ages6 = years.map((el) => 2020 - el);
// console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1} is: ${2020 - el}`);
// console.log(ages6);

ages6 = years.map((el, index) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - el;
  return `Age element ${index + 1} is: ${2020 - el}`;
});

// console.log(ages6);

// Deeper into Arrow Functions

// ES5
var box5 = {
  color: "green",
  position: 1,
  clickMe: function () {
    var self = this;
    document.querySelector(".green").addEventListener("click", function () {
      var str =
        "This is box number " + self.position + " and it is " + self.color;
      alert(str);
    });
  },
};
// box5.clickMe();

// ES6
const box6 = {
  color: "green",
  position: 1,
  clickMe: function () {
    document.querySelector(".green").addEventListener("click", () => {
      var str =
        "This is box number " + this.position + " and it is " + this.color;
      alert(str);
    });
  },
};
// box6.clickMe();

// bad example
const box7 = {
  color: "green",
  position: 1,
  // the "this" keyword is pointing towards global object
  clickMe: () => {
    document.querySelector(".green").addEventListener("click", () => {
      var str =
        "This is box number " + this.position + " and it is " + this.color;
      alert(str);
    });
  },
};
// box7.clickMe();

// Second example: prototyping
// ES5
function Person(name) {
  this.name = name;
}

Person.prototype.myFriends5 = function (friends) {
  var arr = friends.map(
    function (el) {
      return this.name + " is friends with: " + el;
    }.bind(this)
  );
  console.log(arr);
};

var friends = ["Bob", "Mike", "Helen", "Jen"];

// new Person("John").myFriends5(friends);

// ES6
function Person(name) {
  this.name = name;
}

Person.prototype.myFriends6 = function (friends) {
  var arr = friends.map((el) => `${this.name} is friends with: ${el}`);
  console.log(arr);
};

let friends6 = ["Bob", "Mike", "Helen", "Jen"];

new Person("Tim").myFriends6(friends6);
