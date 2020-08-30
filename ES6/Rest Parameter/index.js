// Lecture Rest Parameter

// ES5
function isFullAge5(limit) {
  var argsArr = Array.prototype.slice.call(arguments);
  console.log(argsArr);
  argsArr.forEach(function (cur) {
    console.log(2020 - cur >= limit);
  });
}

// isFullAge5(18, 2007, 1988, 1977, 2005, 1996);

// ES6
function isFullAge6(limit, ...years) {
  years.forEach((cur) => console.log(2020 - cur >= limit));
}

isFullAge6(17, 1990, 2011, 1977, 2005, 2001);
