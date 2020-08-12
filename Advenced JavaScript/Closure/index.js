// Closures

function retirement(retirementAge) {
  var a = " years left until retirement.";
  return function (yearOfBirth) {
    var age = 2020 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementUS = retirement(66);
var retirementUK = retirement(67);
var retirementGermany = retirement(65);
retirementUS(1990);
retirementUK(1990);
retirementGermany(1990);

// more exemple of using closures

var budgetController = (function () {
  var x = 23;

  var add = function (a) {
    return x + a;
  };
  return {
    publicTest: function (b) {
      console.log(add(b));
    },
  };
})();

// more of closures + IIFE
var controller = (function (budgetCtrl, UICtrl) {
  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMStrings();
    document
      .querySelector(DOM.inputButton)
      .addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function (e) {
      if (e.keyCode === 13 || e.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function () {
    // 1. get the field input data
    var input = UICtrl.getInput();
    console.log(input);
    // 2. add the item to budget controller
    // 3. add the item to the UI
    // 4. calculate the budget
    // 5. display the budget on the UI
  };

  return {
    init: function () {
      setupEventListeners();
    },
  };
})(budgetController, UIController);
