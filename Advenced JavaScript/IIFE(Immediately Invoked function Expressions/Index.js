// IIFE

function game() {
  var score = Math.random() * 10;
  console.log(score);
}
// game();

(function () {
  var score = Math.round(Math.random() * 10);
  console.log(score);
})();

(function (goodLuck) {
  var score = Math.round(Math.random() * 10);
  console.log(score >= 5 - goodLuck);
})(5);
