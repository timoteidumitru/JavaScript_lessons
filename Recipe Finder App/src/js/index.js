// Global app controller
import Search from "./models/Search";
import Recipe from "./models/Recipe";
import * as searchView from "./views/searchView";
import { elements, renderLoader, clearLoader } from "./views/base";

/* Global state of the app
    -Search object
    -Current recipe object
    -Shopping list Object
    -Liked recipes
*/

const state = {};

/**
 * SEARCH CONTROLLER
 **/
const controlSearch = async () => {
  // 1) Get the query from view
  const query = searchView.getInput(); //TODO

  if (query) {
    // 2) New search object and add to state
    state.search = new Search(query);

    // 3) Prepare UI for results

    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);
    try {
      // 4) Search for recipes
      await state.search.getResults();

      // 5) Render the results on UI
      clearLoader();
      searchView.renderResults(state.search.result);
    } catch (err) {
      console.log("Error processing recipe query: ", err);
      clearLoader();
    }
  }
};

elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-inline");

  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});

/**
 * RECIPE CONTROLLER
 **/

const controllerRecipe = async () => {
  // get ID from URL
  const id = window.location.hash.replace("#", "");

  if (id) {
    // prepare the UI for changes
    // create new recipe object
    state.recipe = new Recipe(id);
    try {
      // get recipe data
      await state.recipe.getRecipe();
      // calculate serving and time
      state.recipe.calcTime();
      state.recipe.calcServings();
      // render the recipe
      console.log(state.recipe);
    } catch (err) {
      console.log("Error processing recipe: ", err);
    }
  }
};

["hashchange", "load"].forEach((event) =>
  window.addEventListener(event, controllerRecipe)
);
