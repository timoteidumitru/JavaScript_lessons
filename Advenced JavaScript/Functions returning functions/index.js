// Functions returning functions

function interviewQuestion(job) {
  if (job === "designer") {
    return function (name) {
      console.log(name + ", can you please explain what UX design is?");
    };
  } else if (job === "developer") {
    return function (name) {
      console.log("What is you're favorite programming language " + name + "?");
    };
  } else {
    return function (name) {
      console.log("Hello " + name + ", what do you do?");
    };
  }
}

// var developerQuestion = interviewQuestion("developer");
// developerQuestion("Tim");
var designerQuestion = interviewQuestion("designer");
designerQuestion("Alan");
var interviewQuestions = interviewQuestion("driver");
interviewQuestion("Mike");

interviewQuestion("developer")("Tim");
