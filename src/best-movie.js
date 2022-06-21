import { MOVIE_URL } from "./constants";
import { getMovie } from "./movies-container";

/**
 * Get the best rated movie and display it.
 */
export async function getBestMovie() {
    let bestMovieImage = document.getElementById("best-movie-img");
    let bestMovieTitle = document.getElementById("best-movie-title");
    let bestMovieDescription = document.getElementById("best-movie-description");

    fetch("http://localhost:8000/api/v1/titles/?format=json&sort_by=-imdb_score")
        .then(res => res.json())
        .then(data => {
            let bestMovie = data.results[0];
            fetch(MOVIE_URL + bestMovie.id)
                .then(res => res.json())
                .then(data => {
                    bestMovieTitle.textContent = data.title;
                    bestMovieDescription.textContent = data.description;
                    getMovie(bestMovieImage, data);
                })
        })
}