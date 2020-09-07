// Lecture: Ajax - API

fetch("https://cat-fact.herokuapp.com/facts")
  .then((result) => result.json())
  .then((data) => {
    let items = { ...data };
    theCatFact = items.all[1];
    console.log(theCatFact);
    console.log(
      `${theCatFact.user.name.first} ${theCatFact.user.name.last} just learn the following cat fact: ${theCatFact.text}`
    );
  })
  .catch((err) => console.log(err));
