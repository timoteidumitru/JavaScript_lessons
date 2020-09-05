// Lecture: Async Javascript (Promises)

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

getIDs
  .then((IDs) => {
    // console.log(IDs);
    return getRecipe(IDs[2]);
  })
  .then((recipe) => {
    console.log(recipe);
    return getRelated(recipe.publisher);
  })
  .then((recipe) => {
    console.log(recipe);
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
