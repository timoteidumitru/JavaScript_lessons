// Lecture: Async Javascript (async/await)

const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([443, 578, 889, 22, 66, 881]);
  }, 1200);
});
const getRecipe = (recID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = { title: "Fresh tomato pasta", publisher: "Jonas" };
        resolve(`${ID}: ${recipe.title}`);
      },
      1200,
      recID
    );
  });
};

const getRelated = (publisher) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (pub) => {
        const recipe = { title: "Italian pizza", publisher: "Johna" };
        resolve(`${pub}: ${recipe.title}`);
      },
      1300,
      publisher
    );
  });
};

async function getRecipeAW() {
  const IDs = await getIDs;
  console.log(IDs);
  const recipe = await getRecipe(IDs[2]);
  console.log(recipe);
  const related = await getRelated("Joseph Smith");
  console.log(related);

  return recipe;
}

getRecipeAW().then((res) => console.log(`${res} is best ever!`));
