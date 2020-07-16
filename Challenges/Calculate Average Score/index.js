/* 
John and Mike both play basketball in different teams. In the last 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score of each team.
2. Decide which teams wins in average(highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the score to show different winers. Don't forget to take into account there might be draw(the same average score).
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you'll need the && operator to take the decision. if you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the score to generate different winners, keeping in mind there might be draws.

GOOD LUCK :)
*/
// ######################################################################

var mikeTeamScore1 = 89;
var mikeTeamScore2 = 120;
var mikeTeamScore3 = 103;
var johnTeamScore1 = 116;
var johnTeamScore2 = 91;
var johnTeamScore3 = 123;
var MaryTeamScore1 = 97;
var MaryTeamScore2 = 134;
var MaryTeamScore3 = 105;

// calculate average scores
var mikeAverageScore = (mikeTeamScore1 + mikeTeamScore2 + mikeTeamScore3) / 3;
var johnAverageScore = (johnTeamScore1 + johnTeamScore2 + johnTeamScore3) / 3;
var maryAverageScore = (MaryTeamScore1 + MaryTeamScore2 + MaryTeamScore3) / 3;

console.log(
  "Mike's team: " + mikeAverageScore + " | ",
  "John's team: " + johnAverageScore + " | ",
  "Mary's team: " + maryAverageScore
);

// check which team have the highest score
var highestAverageScore;
if (
  mikeAverageScore > johnAverageScore &&
  mikeAverageScore > maryAverageScore
) {
  highestAverageScore = mikeAverageScore;
  console.log(
    "The winner is Mike's team, winning with: " +
      highestAverageScore +
      " points"
  );
} else if (
  mikeAverageScore < johnAverageScore &&
  johnAverageScore > maryAverageScore
) {
  highestAverageScore = johnAverageScore;
  console.log(
    "The winner is John's team, winning with: " +
      highestAverageScore +
      " points"
  );
} else if (
  mikeAverageScore < maryAverageScore &&
  johnAverageScore < maryAverageScore
) {
  highestAverageScore = maryAverageScore;
  console.log(
    "The winner is Mary's team, winning with: " +
      highestAverageScore +
      " points"
  );
} else {
  // check for draw between two teams
  if (mikeAverageScore === johnAverageScore) {
    highestAverageScore = mikeAverageScore;
  } else if (mikeAverageScore === maryAverageScore) {
    highestAverageScore = maryAverageScore;
  } else {
    highestAverageScore = johnAverageScore;
  }

  console.log(
    " Yay, apparently its a draw, the draw average score is: " +
      highestAverageScore
  );
}
