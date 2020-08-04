// questions constructor
function Question(question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
}

Question.prototype.displayQuestion = function () {
  console.log(this.question);

  for (var i = 0; i < this.answers.length; i++) {
    console.log(i + ":" + this.answers[i]);
  }
};

Question.prototype.checkAnswer = function (ans) {
  if (ans == this.correct) {
    console.log("Correct answer");
  } else {
    console.log("Wrrong answer, give it another try? :)");
  }
};

// questions
var q1 = new Question(
  "Is JavaScript the coolest programming language in the world?",
  ["yes", "no"],
  0
);
var q2 = new Question(
  "What's the name of this course teacher?",
  ["John", "Mike", "Johna", "Elena"],
  2
);
var q3 = new Question(
  "What does best describe coding?",
  ["Borring", "Hard", "Fun", "Tedious"],
  2
);

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

var answer = parseInt(prompt("Please select the correct answer."));

questions[n].checkAnswer(answer);
