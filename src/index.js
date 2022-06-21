import { getBestMovie } from "./best-movie";
import { createMovieCategory } from "./movies-container";
import { MOVIES_CATEGORIES } from "./constants";

let categoriesContainer = document.getElementById("categories");

getBestMovie();

for (let i in MOVIES_CATEGORIES) {
  console.log(i + " " + MOVIES_CATEGORIES[i]);
  createMovieCategory(i, MOVIES_CATEGORIES[i], categoriesContainer);
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}