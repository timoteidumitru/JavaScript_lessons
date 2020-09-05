// Lecture Async Javascript (Callbacks)
function getRecipy() {
  setTimeout(function () {
    const recipeID = [444, 578, 88, 665];
    // console.log(recipeID);

    setTimeout(
      function (id) {
        const recipe = { title: "Fresh tomato pasta", publisher: "Johna" };
        // console.log(`${id}: ${recipe.title}`);
        setTimeout(
          function (publisher) {
            const recipe = { title: "Italian pizza", publisher: "Helena" };
            // console.log(`Publisher: ${recipe.publisher}`);
          },
          800,
          recipe.publisher
        );
      },
      700,
      recipeID[1]
    );
  }, 1200);
}
getRecipy();
