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
