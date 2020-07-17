/* 
John and his family went on a holiday and went to 3 different restaurants. The bills were £124, £48 and £268.

To tip the waiter a fair amount, John created a simple tip calculator(as a function). He likes to tip 20% of the bill when the bill is less then £50, 15% when the bill is between £50 and £200, and 10% when the bill is more then £200.

In the end John would like to have  2 arrays:
1. Containing all three tips(one for each bill)
2. Containing all three final paid amounts(bill+tip)

{NOTE: To calculate 20% of a value, simply multiply if with 20/100 = 0.2}

GOOD LUCK!

*/

// calculate the tips based on bill amount
function calculateTip(value) {
  var percentage;
  if (value < 50 && value > 0) {
    percentage = 0.2;
  } else if (value >= 50 && value < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * value;
}

// console.log(calculateTip(100));

var bills = [128, 32, 256];
var tips = [
  calculateTip(bills[0]),
  calculateTip(bills[1]),
  calculateTip(bills[2]),
];
var filanPay = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(filanPay);
