// IIFE

function game() {
  var score = Math.random() * 10;
  console.log(score);
}
// game();

(function () {
  var score = Math.round(Math.random() * 10);
  console.log(score);
})();

(function (goodLuck) {
  var score = Math.round(Math.random() * 10);
  console.log(score >= 5 - goodLuck);
})(5);

// more of IIFE

var budgetController = (function () {
  var x = 23;

  var add = function (a) {
    return x + a;
  };
  return {
    publicTest: function (b) {
      return add(b);
    },
  };
})();

var UIController = (function () {})();

var controller = (function (budgetCtrl, UICtrl) {
  var z = budgetCtrl.publicTest(5);

  return {
    anotherPublic: function () {
      console.log(z);
    },
  };
})(budgetController, UIController);
