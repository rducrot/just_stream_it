import {addMovie, addMovieCategory} from "./movies-container";
import Movie from "./movie";

let moviesCategories = {"":"Films les mieux notés",
                        "Sci-Fi":"Science-Fiction",
                        "Adventure":"Aventure",
                        "Comedy":"Comédie"};
                        
let categoriesContainer = document.getElementById("categories");
let bestMovieContainer = document.getElementById("best-movie");
let bestMovieImage = document.getElementById("best-movie-img");
let bestMovieTitle = document.getElementById("best-movie-title");

fetch("http://localhost:8000/api/v1/titles/?format=json&sort_by=-imdb_score")
  .then(rest => rest.json())
  .then(function (data) {
    let bestMovie = data.results[0];
    bestMovieTitle.textContent = bestMovie.title;
    addMovie(bestMovieImage, bestMovie);
  })

for (let i in moviesCategories){
  addMovieCategory(i, moviesCategories[i], categoriesContainer);
};
