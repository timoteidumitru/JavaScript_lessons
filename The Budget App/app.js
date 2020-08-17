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

  var data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
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
    testing: function () {
      console.log(data);
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
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMStrings.inputType).value,
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value,
      };
    },
    addListItem: function (obj, type) {
      var html, newHtml, element;
      // create html string with placeholder text
      if (type === "inc") {
        element = DOMStrings.incomeContainer;

        html =
          '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete">  <button class="item__delete--btn"> <i class="ion-ios-close-outline"></i> </button> </div> </div> </div> ';
      } else if (type === "exp") {
        element = DOMStrings.expensesContainer;

        html =
          '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">10%</div> <div class="item__delete"> <button class="item__delete--btn"> <i class="ion-ios-close-outline"></i> </button> </div> </div> </div>';
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
  };

  var ctrlAddItem = function () {
    var input, newItem;

    // 1. get the field input data
    input = UICtrl.getInput();
    // console.log(input);

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
    // 5. calculate the budget
    // 6. display the budget on the UI
  };

  return {
    init: function () {
      console.log("Application has started.");
      setupEventListeners();
    },
  };
})(budgetController, UIController);

controller.init();
