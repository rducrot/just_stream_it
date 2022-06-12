import Movie from "./movie";

let bestMovieContainer = document.getElementById("best-movie");
let bestMovieImage = document.getElementById("best-movie-img");
let bestMovieTitle = document.getElementById("best-movie-title");
fetch("http://localhost:8000/api/v1/titles/?format=json&sort_by=-imdb_score")
    .then(rest => rest.json())
    .then(function(data){
      let bestMovie = data.results[0];
      bestMovieImage.src = bestMovie.image_url;
      bestMovieImage.alt = bestMovie.title;
      bestMovieTitle.textContent = bestMovie.title;
    })
