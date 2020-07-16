// Basic of functions

function calculateAge(birthYear) {
  return 2020 - birthYear;
}

var ageTim = calculateAge(1990);
var ageEmy = calculateAge(1996);
var ageJen = calculateAge(1977);
// console.log(ageTim, ageEmy, ageJen);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 67 - age;
  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years");
  } else {
    console.log(firstName + " is already retired " + retirement + " years ago");
  }
  // console.log(firstName + " retires in " + retirement + " years");
}

// yearsUntilRetirement(1990, "Tim");
// yearsUntilRetirement(1940, "Yca");
// yearsUntilRetirement(1997, "Emy");

// #######################################################################
// Function Expresions and Declarations

// function declaration
// function whatDoYouDO(job, firstName) {}

// function expression
var whatDoYouDO = function (job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids how to code";
    case "driver":
      return firstName + " deliver pizza for pizzahut";
    case "designer":
      return firstName + " design awesome websites";
    default:
      return firstName + " does something else";
  }
};

console.log(whatDoYouDO("teacher", "Tim"));
console.log(whatDoYouDO("driver", "Jen"));
console.log(whatDoYouDO("designer", "Ben"));
