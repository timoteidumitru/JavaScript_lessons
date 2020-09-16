// Global app controller
import string from "./models/Search";
// import { add as a, multiply as m, ID } from "./views/searchView";
import * as searchView from "./views/searchView";

console.log(
  ` Using imported function ${searchView.add(
    searchView.ID,
    3
  )} and multiply: ${searchView.multiply(2, 5)}, and least is: ${string}`
);
