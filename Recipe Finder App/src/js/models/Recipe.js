import axios from "axios";

export default class Recipe {
  constructor(id) {
    this.id = id;
  }
  async getRecipe() {
    try {
      const res = await axios(
        `https://forkify-api.herokuapp.com/api/get?rId=${this.id}`
      );
      this.title = res.data.recipe.title;
      this.author = res.data.recipe.publisher;
      this.img = res.data.recipe.image_url;
      this.url = res.data.recipe.source_url;
      this.ingredients = res.data.recipe.ingredients;
    } catch (err) {
      console.log(err);
      alert("something went wrong :(");
    }
  }

  calcTime() {
    // Assuming that we need 15 min for each 3 ingredients
    const numIng = this.ingredients.length;
    const periods = Math.ceil(numIng / 3);
    this.time = periods * 15;
  }

  calcServings() {
    this.servings = 4;
  }
  parseIngredients() {
    const unitLong = [
      "tablespoons",
      "tablespoon",
      "ounces",
      "ounce",
      "teaspoons",
      "teaspoon",
      "cups",
      "pounds",
    ];
    const unitShort = [
      "tbsp",
      "tbsp",
      "oz",
      "oz",
      "tsp",
      "tsp",
      "cup",
      "pound",
    ];
    const units = [...unitShort, "kg", "g"];

    const newIngredients = this.ingredients.map((el) => {
      // uniform units
      let ingredient = el.toLowerCase();
      unitLong.forEach((unit, i) => {
        ingredient = ingredient.replace(unit, unitShort[i]);
      });

      // remove parantheses
      ingredient = ingredient.replace(/ *\([^)]*\) */g, " ");

      // parse ingredients into count, unit and ingredients
      const arrIng = ingredient.split(" ");
      const unitIndex = arrIng.findIndex((el2) => units.includes(el2));
      let objIng;

      if (unitIndex > -1) {
        // There is a unit
        // Ex: 4 1/2 cups, arrCount is [4, 1/2] --> eval("4+1/2") --> 4.5
        // Ex: 4 cups, arrCount is  just [4]
        const arrCount = arrIng.slice(0, unitIndex);

        let count;
        if (arrCount.length === 1) {
          count = eval(arrIng[0].replace("-", "+"));
        } else {
          count = eval(arrIng.slice(0, unitIndex).join("+"));
        }

        objIng = {
          count,
          unit: arrIng[unitIndex],
          ingredient: arrIng.slice(unitIndex + 1).join(" "),
        };
      } else if (parseInt(arrIng[0], 10)) {
        // There is no unit, but first element is a number
        objIng = {
          count: parseInt(arrIng[0], 10),
          unit: "",
          ingredient: arrIng.slice(1).join(" "),
        };
      } else if (unitIndex === -1) {
        // there is NO unit and no number in first possition
        objIng = {
          count: 1,
          unit: "",
          ingredient,
        };
      }

      return objIng;
    });
    this.ingredients = newIngredients;
  }

  updateServings(type) {
    // Servings
    const newServings = type === "dec" ? this.servings - 1 : this.servings + 1;

    // Ingredients
    this.ingredients.forEach((ing) => {
      ing.count = ing.count * (newServings / this.servings);
    });

    this.servings = newServings;
  }
}
