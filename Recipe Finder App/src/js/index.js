// Global app controller
import axios from "axios";

async function getresults(query) {
  try {
    const res = await axios(
      `https://forkify-api.herokuapp.com/api/search?q=${query}`
    );
    console.log(res.data.recipes);
  } catch (error) {
    alert(error);
  }
}

getresults("pizza");
