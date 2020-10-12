// Global app controller
import Search from "./models/Search";
import Recipe from "./models/Recipe";
import List from "./models/List";
import Likes from "./models/Likes";
import * as searchView from "./views/searchView";
import * as recipeView from "./views/recipeView";
import * as listView from "./views/listView";
import * as likesView from "./views/likesView";
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
// const query = "47025"; //TODO

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
    recipeView.clearRecipe();
    renderLoader(elements.recipe);

    // highlight selected search item
    if (state.search) searchView.highlightSelected(id);

    // create new recipe object
    state.recipe = new Recipe(id);

    try {
      // get recipe data and parse ingredients
      await state.recipe.getRecipe();
      state.recipe.parseIngredients();

      // calculate serving and time
      state.recipe.calcTime();
      state.recipe.calcServings();

      // render the recipe
      clearLoader();
      recipeView.renderRecipe(state.recipe, state.likes.isLiked(id));
    } catch (err) {
      console.log("Error processing recipe: ", err);
    }
  }
};

["hashchange", "load"].forEach((event) =>
  window.addEventListener(event, controllerRecipe)
);

/**
 * LIST CONTROLLER
 **/
const controlList = () => {
  // create a new list IF there is none yet
  if (!state.list) state.list = new List();

  // add each ingredients to te list and UI
  state.recipe.ingredients.forEach((el) => {
    const item = state.list.addItem(el.count, el.unit, el.ingredient);
    listView.renderItem(item);
  });
};

// handle delete and update list item events
elements.shopping.addEventListener("click", (e) => {
  const id = e.target.closest(".shopping__item").dataset.itemid;

  //handle the delete button
  if (e.target.matches(".shopping__delete, .shopping__delete *")) {
    // delete item from state
    state.list.deleteItem(id);

    // delete item from UI
    listView.deleteItem(id);

    // handle the count update
  } else if (e.target.matches(".shopping__count-value")) {
    const val = parseInt(e.target.value, 10);
    state.list.updateCount(id, val);
  }
});

/**
 * LIKES CONTROLLER
 **/

const controlLikes = () => {
  if (!state.likes) state.likes = new Likes();
  const curentID = state.recipe.id;

  if (!state.likes.isLiked(curentID)) {
    // user has NOT liked yet the recipe
    // add like to the state
    const newLike = state.likes.addLike(
      curentID,
      state.recipe.title,
      state.recipe.author,
      state.recipe.img
    );
    // toggle the like button
    likesView.toggleLikeBtn(true);
    // add like to the UI list
    likesView.renderLike(newLike);
    console.log(state.likes);
  } else {
    // user has liked the recipe
    // remove like from the state
    state.likes.deleteLike(curentID);
    // toggle the like button
    likesView.toggleLikeBtn(false);
    // remove like form UI list
    likesView.deleteLike(curentID);
    // console.log(state.likes);
  }
  likesView.toggleLikeMenu(state.likes.getNumLikes());
};

// restore liked recipe on page load
window.addEventListener("load", () => {
  state.likes = new Likes();

  // restore likes
  state.likes.readStorage();

  // toggle like menu button
  likesView.toggleLikeMenu(state.likes.getNumLikes());

  // render existing likes
  state.likes.likes.forEach((like) => likesView.renderLike(like));
});

// handling recipe button clicks
elements.recipe.addEventListener("click", (e) => {
  if (e.target.matches(".btn-decrease, .btn-decrease *")) {
    // decrease button is clicked
    if (state.recipe.servings > 1) {
      state.recipe.updateServings("dec");
      recipeView.updateServingsIngredients(state.recipe);
    }
  } else if (e.target.matches(".btn-increase, .btn-increase *")) {
    // increase button is clicked
    state.recipe.updateServings("inc");
    recipeView.updateServingsIngredients(state.recipe);
  } else if (e.target.matches(".recipe__btn--add, .recipe__btn--add *")) {
    // add ingredients to shopping list
    controlList();
  } else if (e.target.matches(".recipe__love, .recipe__love *")) {
    // like controller
    controlLikes();
  }
});
