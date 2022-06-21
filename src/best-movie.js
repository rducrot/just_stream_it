import { getMovie } from "./movies-container";

/**
 * Get the best rated movie and display it.
 */
export async function getBestMovie() {
    let bestMovieImage = document.getElementById("best-movie-img");
    let bestMovieTitle = document.getElementById("best-movie-title");
  
    fetch("http://localhost:8000/api/v1/titles/?format=json&sort_by=-imdb_score")
      .then(res => res.json())
      .then(data => {
        let bestMovie = data.results[0];
        bestMovieTitle.textContent = bestMovie.title;
        getMovie(bestMovieImage, bestMovie);
      })
  }