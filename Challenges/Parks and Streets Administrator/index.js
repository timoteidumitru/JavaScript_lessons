/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area; // km
    this.numTrees = numTrees;
  }
  treeDensity() {
    const density = this.numTrees / this.area;
    console.log(
      `${this.name} has a tree density of ${Math.round(
        density
      )} trees per square Km`
    );
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classiftStreet() {
    const classification = new Map();
    classification.set(1, "tiny");
    classification.set(2, "small");
    classification.set(3, "normal");
    classification.set(4, "big");
    classification.set(5, "huge");
    console.log(
      `${this.name}, build in ${this.buildYear}, is a ${classification.get(
        this.size
      )} street`
    );
  }
}

const allParks = [
  new Park("Green Park", 1987, 0.2, 215),
  new Park("National park", 1957, 2.9, 3215),
  new Park("Oak Park", 1937, 1.2, 2215),
];

const allStreets = [
  new Street("Ocean Avenue", 1999, 0.2, 1),
  new Street("Victoria Street", 1979, 2.2, 4),
  new Street("Liverpool Street", 1959, 0.4, 3),
];

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log("-----Parks Report-----");
  // Density
  p.forEach((el) => el.treeDensity());
  // Average Age
  const ages = p.map((el) => new Date().getFullYear() - el.buildYear);
  const [totalAge, averageAge] = calc(ages);
  console.log(
    `Our ${p.length} parks have an average of ${Math.round(averageAge)} years`
  );
  // Which park has more then 1000 trees
  const i = p.map((el) => el.numTrees).findIndex((el) => el >= 1000);
  console.log(`${p[i].name} has more then 1000 trees.`);
}
function reportStreets(s) {
  console.log("-----Streets Report-----");
  // Total and average length of the town's streets
  const [totalLength, averageLength] = calc(s.map((el) => el.length));
  console.log(
    `Our ${s.length} streets have a total length of ${Math.round(
      totalLength
    )}Km, with an average of ${Math.round(averageLength)} km`
  );
  // Classify size
  s.forEach((el) => el.classiftStreet());
}
reportParks(allParks);
reportStreets(allStreets);
