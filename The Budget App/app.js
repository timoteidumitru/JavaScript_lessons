// BUDGET CONTROLLER
var budgetController = (function () {
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var calculateTotal = function (type) {
    var sum = 0;
    data.allItems[type].forEach(function (curr) {
      sum += curr.value;
    });
    data.totals[type] = sum;
  };

  var data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
    budget: 0,
    percentage: -1,
  };

  return {
    addItem: function (type, des, val) {
      var newItem, ID;

      // create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id;
      } else {
        ID = 0;
      }

      // create new item based on 'inc' or 'exp' type
      if (type === "exp") {
        newItem = new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }

      // push it into our data structure
      data.allItems[type].push(newItem);

      // return the new element
      return newItem;
    },
    deleteItem: function (type, id) {
      var ids = data.allItems[type].map(function (current) {
        return current.id;
      });

      index = ids.indexOf(id);

      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }
    },
    calcutareBudget: function () {
      // calculate total income and expense
      calculateTotal("exp");
      calculateTotal("inc");

      // calculate the budget: income - expenses
      data.budget = data.totals.inc - data.totals.exp;

      // calculate the percentage of the income that we spend
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1;
      }
    },
    getBudget: function () {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentages: data.percentage,
      };
    },

    testing: function () {
      console.log(data.allItems);
    },
  };
})();

// UI CONTROLLER
var UIController = (function () {
  var DOMStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputButton: ".add__btn",
    incomeContainer: ".income__list",
    expensesContainer: ".expenses__list",
    budgetLabel: ".budget__value",
    incomeLabel: ".budget__income--value",
    expensesLabel: ".budget__expenses--value",
    percentageLabel: ".budget__expenses--percentage",
    container: ".container",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMStrings.inputType).value,
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMStrings.inputValue).value),
      };
    },
    addListItem: function (obj, type) {
      var html, newHtml, element;
      // create html string with placeholder text
      if (type === "inc") {
        element = DOMStrings.incomeContainer;

        html =
          '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete">  <button class="item__delete--btn"> <i class="ion-ios-close-outline"></i> </button> </div> </div> </div> ';
      } else if (type === "exp") {
        element = DOMStrings.expensesContainer;

        html =
          '<div class="item clearfix" id="exp-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">10%</div> <div class="item__delete"> <button class="item__delete--btn"> <i class="ion-ios-close-outline"></i> </button> </div> </div> </div>';
      }
      newHtml = html.replace("%id%", obj.id);
      newHtml = newHtml.replace("%description%", obj.description);
      newHtml = newHtml.replace("%value%", obj.value);
      // insert the html to the DOM
      document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
      // replace the placeholder text with some actual data
    },
    clearFields: function () {
      var fields, fieldsArray;

      fields = document.querySelectorAll(
        DOMStrings.inputDescription + ", " + DOMStrings.inputValue
      );
      fieldsArray = Array.prototype.slice.call(fields);
      fieldsArray.forEach(function (current, index, array) {
        current.value = "";
      });
      fieldsArray[0].focus();
    },
    displayBudget: function (obj) {
      document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
      document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc;
      document.querySelector(DOMStrings.expensesLabel).textContent =
        obj.totalExp;
      if (obj.percentages > 0) {
        document.querySelector(DOMStrings.percentageLabel).textContent =
          obj.percentages + "%";
      } else {
        document.querySelector(DOMStrings.percentageLabel).textContent = "---";
      }
    },
    getDOMStrings: function () {
      return DOMStrings;
    },
  };
})();

// GLOBAL ALL CONTROLLER
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

    document
      .querySelector(DOM.container)
      .addEventListener("click", ctrlDeleteItem);
  };

  var updateBudget = function () {
    // 1. calculate the budget
    budgetCtrl.calcutareBudget();

    // 2. return the budget
    var budget = budgetCtrl.getBudget();

    // 3. display the budget on the UI
    UICtrl.displayBudget(budget);
  };

  var ctrlAddItem = function () {
    var input, newItem;

    // 1. get the field input data
    input = UICtrl.getInput();
    // console.log(input);

    // checks for input values
    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      // 2. add the item to budget controller
      newItem = budgetController.addItem(
        input.type,
        input.description,
        input.value
      );
      // 3. add the item to the UI
      UICtrl.addListItem(newItem, input.type);
      // 4. clear the fields
      UICtrl.clearFields();
      // 5. calculate and update budget
      updateBudget();
    }
  };

  var ctrlDeleteItem = function (event) {
    var itemID, splitID, type, id;
    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if (itemID) {
      splitID = itemID.split("-");
      type = splitID[0];
      id = parseInt(splitID[1]);

      // delete an item from data structure
      budgetCtrl.deleteItem(type, id);

      // delete the item from UI
      // update and show the new budgets
    }
  };

  return {
    init: function () {
      console.log("Application has started.");
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentages: -1,
      });
      setupEventListeners();
    },
  };
})(budgetController, UIController);

controller.init();
