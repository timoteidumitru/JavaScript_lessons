// BUDGET CONTROLLER
var budgetController = (function () {
  // some code
})();

// UI CONTROLLER
var UIController = (function () {
  // some code
})();

// GLOBAL ALL CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
  var ctrlAddItem = function () {
    // 1. get the field input data
    // 2. add the item to budget controller
    // 3. add the item to the UI
    // 4. calculate the budget
    // 5. display the budget on the UI
    console.log("its works");
  };

  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function (e) {
    if (e.keyCode === 13 || e.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
