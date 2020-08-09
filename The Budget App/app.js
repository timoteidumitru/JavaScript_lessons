// BUDGET CONTROLLER
var budgetController = (function () {
  // some code
})();

// UI CONTROLLER
var UIController = (function () {
  var DOMStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputButton: ".add__btn",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMStrings.inputType).value, //
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value,
      };
    },
    getDOMStrings: function () {
      return DOMStrings;
    },
  };
})();

// GLOBAL ALL CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
  var DOM = UICtrl.getDOMStrings();
  var ctrlAddItem = function () {
    // 1. get the field input data
    var input = UICtrl.getInput();
    console.log(input);
    // 2. add the item to budget controller
    // 3. add the item to the UI
    // 4. calculate the budget
    // 5. display the budget on the UI
  };

  document
    .querySelector(DOM.inputButton)
    .addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function (e) {
    if (e.keyCode === 13 || e.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
