import { BEST_SCORE_URL, MOVIE_URL, CLASS_BEST_MOVIE_IMG,
        CLASS_BEST_MOVIE_TITLE, CLASS_BEST_MOVIE_DESCRIPTION } from "./constants";
import { getMovie } from "./movies-container";

/**
 * Get the best rated movie and display it.
 */
export async function getBestMovie() {
    let bestMovieImage = document.getElementById(CLASS_BEST_MOVIE_IMG);
    let bestMovieTitle = document.getElementById(CLASS_BEST_MOVIE_TITLE);
    let bestMovieDescription = document.getElementById(CLASS_BEST_MOVIE_DESCRIPTION);

    fetch(BEST_SCORE_URL)
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