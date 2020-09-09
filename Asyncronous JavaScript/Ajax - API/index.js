// Lecture: Ajax - API

fetch("https://cat-fact.herokuapp.com/facts")
  .then((result) => result.json())
  .then((data) => {
    let items = { ...data };
    theCatFact = items.all[1];
    // console.log(theCatFact);
    // console.log(
    //   `${theCatFact.user.name.first} ${theCatFact.user.name.last} just learn the following cat fact: ${theCatFact.text}`
    // );
  })
  .catch((err) => console.log(err));

async function getFunFactsCats() {
  try {
    const result = await fetch("https://cat-fact.herokuapp.com/facts");
    const data = await result.json();
    console.log(data.all[1].text);
    console.log(data.all[2].text);
    console.log(data.all[3].text);
  } catch (error) {
    console.log(error);
  }
}

getFunFactsCats();
