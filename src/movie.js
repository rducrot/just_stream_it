import {
  NUMBER_OF_MOVIES_PER_CATEGORIE,
  NUMBER_OF_MOVIES_CATEGORIES
} from "./constants";

/**
* Fetch movies categories from an URL and append a movies categories list.
* @param {string} url 
* @param {string[]} categoriesList 
*/
async function fetchCategories(url, categoriesList) {
  fetch(url)
    .then(res => res.json())
    .then(function (data) {
      for (let category of data.results) {
        categoriesList.push(category.name);
      }
      if (data.next != null) {
        fetchCategories(data.next, categoriesList);
      }
    })
}

/**
 * Return a list of movies categories from an URL.
 * @param {string} url 
 * @returns {Promise<object[]>} A list of categories
 */
export async function createCategoriesList(url) {
  let categoriesList = []
  fetchCategories(url, categoriesList);
  return categoriesList;
}

/**
 * 
 * @param {*} url 
 * @returns 
 */
export async function selectRandomCategories(url) {
  let categoriesList = await createCategoriesList(url);
  let categoriesToShow = [];
  console.log(categoriesList.length);
  while (categoriesToShow.length < NUMBER_OF_MOVIES_CATEGORIES) {
    let randomCategory = await categoriesList[Math.floor(Math.random() * categoriesList.length)];
    categoriesToShow.push(randomCategory);
    console.log(randomCategory);
  }
  console.log(categoriesToShow);
  return categoriesToShow;
}

/**
 * Fetch movies from an URL and append a movies list.
 * @param {string} url 
 * @param {object[]} moviesList 
 */
async function fetchMovies(url, moviesList) {
  fetch(url)
    .then(res => res.json())
    .then(function (data) {
      for (let movie of data.results) {
        moviesList.push(movie)
      }
      if (data.next != null && moviesList.length < NUMBER_OF_MOVIES_PER_CATEGORIE) {
        fetchMovies(data.next, moviesList);
      }
    })
}

/**
 * Return a list of movies from an URL.
 * @param {string} url
 * @returns {Promise<object[]>} A list of movies
 */
export async function createMoviesList(url) {
  let moviesList = []
  fetchMovies(url, moviesList);
  return moviesList;
}