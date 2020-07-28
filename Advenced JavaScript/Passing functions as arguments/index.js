// Passing functions as arguments / First class functions
var years = [1990, 1988, 1989, 2007, 1959];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calcAge(el) {
  return 2020 - el;
}

function isAdult(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calcAge);
console.log(ages);

var adultPers = arrayCalc(ages, isAdult);
console.log(adultPers);

var hRates = arrayCalc(ages, maxHeartRate);
console.log(hRates);
