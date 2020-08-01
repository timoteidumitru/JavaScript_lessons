// Bind, Apply and Call
var john = {
  name: "Tim",
  age: 28,
  job: "developer",
  presentation: function (style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfDay +
          " Ladies and Gentlemans! I'm " +
          this.name +
          " and I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old."
      );
    } else if (style === "friendly") {
      console.log(
        "How you dooin' bro? I'm " +
          this.name +
          " and I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old. Have a nice " +
          timeOfDay
      );
    }
  },
};

var emily = {
  name: "Emily",
  age: 28,
  job: "digital marketer",
};

john.presentation("formal", "morning");

john.presentation.call(emily, "friendly", "afternoon");

john.presentation.apply(emily, ["formal", "evening"]);

john.presentation.bind(emily, ["formal", "evening"]);

var johnFriendly = john.presentation.bind(john, "friendly");

johnFriendly("evening");
johnFriendly("night");

var emilyFormal = john.presentation.bind(emily, "formal");
emilyFormal("afternoon");
