/*
Remember the tip calculator challenge? Let's create a more advenced version using everithing we learned!

This time, John and his family went to 5 different restaurants. The bills were £124, £48, £268, £180 and $42
John likes to tip 20% of the bill when the bill is less then 50%, 15% when the bill is between £50 and £200, and 10% if the bill is higher then £200

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method shuld include a loop to iterate over all the paid bills and to the tip calculations.
4. As an output, create a) a new array containing all tips and b) an array containing final paid amounts(bill + tip). HINT: Start with two empty arrays [] as propierties then fill them up in the loops.

EXTRA AFTER FINISH: Mike's family also went on a holiday, going on 4 different restaurants. The bills were £77, £375, £110 and £45.
Mike likes to tip 20% of the bill when the bill is less then £100, 10% when the bill is between £100 and £300, and 25% if the bill is more then £300(different then john)

5. Implement the same functionality as before, this time using Mike's tipping rules
6. Create a function(not a method) to calculate the average of the given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable(starting from 0). After you have the sum of the array, divide it by number of elements in it(that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK
*/

// John's family calculations
var john = {
  fullName: "John Cena",
  bills: [124, 48, 268, 180, 42],
  tips: [],
  finalPay: [],
  calcTip: function (bills) {
    var percent = 0;
    var finalBill = [];
    for (i = 0; i < bills.length; i++) {
      if (bills[i] < 50) {
        percent = 0.2;
      } else if (bills[i] >= 50 && bills[i] < 200) {
        percent = 0.15;
      } else {
        percent = 0.1;
      }
      this.tips.push(bills[i] * percent);
      finalBill.push(bills[i] * percent + bills[i]);
    }
    this.finalPay = finalBill;
  },
};
john.calcTip(john.bills);

// Mike's family calculations
var mike = {
  fullName: "Mike Tyson",
  bills: [77, 375, 110, 45],
  tips: [],
  finalPay: [],
  calcTip: function (bills) {
    var percent = 0;
    var finalBill = [];
    for (i = 0; i < bills.length; i++) {
      if (bills[i] < 100) {
        percent = 0.2;
      } else if (bills[i] >= 100 && bills[i] < 300) {
        percent = 0.1;
      } else {
        percent = 0.25;
      }
      this.tips.push(bills[i] * percent);
      finalBill.push(bills[i] * percent + bills[i]);
    }
    this.finalPay = finalBill;
  },
};
mike.calcTip(mike.bills);

// Calculate the average tips
var avgTips = function (tips) {
  var total = 0;
  for (var i = 0; i < tips.length; i++) {
    total += tips[i];
  }
  return total;
};

if (avgTips(john.tips) > avgTips(mike.tips)) {
  console.log("Apparently John's family pay more tips then Mike's");
} else {
  console.log("Apparently Mike's family pay more tips then John's");
}

console.log("Mike's average tips is: £" + avgTips(mike.tips));
console.log("John's average tips is: £" + avgTips(john.tips));

console.log(john);
console.log(mike);
