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
    bestMovieImage.src = bestMovie.image_url;
    bestMovieImage.alt = bestMovie.title;
    bestMovieTitle.textContent = bestMovie.title;
  })

function addMovie(container, movie) {
  let movieContainer = document.createElement("div");
  movieContainer.classList.add("movie");

  let movieImg = document.createElement("img");
  movieImg.classList.add("movie__img");
  movieImg.src = movie.image_url;
  movieImg.alt = movie.title;

  let movieOverlay = document.createElement("div");
  movieOverlay.classList.add("movie__overlay");

  let movieTitle = document.createElement("p");
  movieTitle.classList.add("movie__title");
  movieTitle.textContent = movie.title;
  
  movieOverlay.appendChild(movieTitle);
  movieContainer.appendChild(movieImg);
  movieContainer.appendChild(movieOverlay);
  container.appendChild(movieContainer);
}

function addMovieCategory(category, categoryName) {
  let categoryContainer = document.createElement("div");
  categoryContainer.classList.add("category");

  let categoryTitle = document.createElement("h2");
  categoryTitle.classList.add("category__title");
  categoryTitle.textContent = categoryName

  let moviesContainer = document.createElement("div");
  moviesContainer.classList.add("movies-container");

  categoryContainer.appendChild(categoryTitle);
  categoryContainer.appendChild(moviesContainer)
  categoriesContainer.appendChild(categoryContainer);

  fetch(`http://localhost:8000/api/v1/titles/?format=json&sort_by=-imdb_score&genre=${category}`)
    .then(res => res.json())
    .then(function (data) {
      for (let movie of data.results) {
        addMovie(moviesContainer, movie);
      }
    })
};

for (let i in moviesCategories){
  addMovieCategory(i, moviesCategories[i]);
};
