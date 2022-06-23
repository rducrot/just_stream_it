import { getBestMovie } from "./best-movie";
import { createMovieCategory } from "./movies-container";
import { MOVIES_CATEGORIES, ID_CATEGORIES } from "./constants";

let categoriesContainer = document.getElementById(ID_CATEGORIES);

getBestMovie();

for (let i in MOVIES_CATEGORIES) {
  createMovieCategory(i, MOVIES_CATEGORIES[i], categoriesContainer);
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}