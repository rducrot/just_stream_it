import { MOVIE_URL } from "./constants";

/**
 * Create a modal with the informations of the selected movie.
 * @param {number} movieId 
 */
 export function createModal(movieId){
    let modal = document.getElementById("modal");
    let modalContent = document.getElementById("modal-content");
    fetch(MOVIE_URL + movieId)
      .then(res => res.json())
      .then(data => {
    modalContent.innerHTML = `
    <img class="movie__img" src=${data.image_url}></img>
    <div>
      <p>Titre : ${data.title}</p>
      <p>Genre(s) : ${data.genres}</p>
      <p>Date de publication : ${data.date_published}</p>
      <p>Score : ${data.rated}</p>
      <p>Score Imbd : ${data.imdb_score}</p>
      <p>Directeur(s) : ${data.directors}</p>
      <p>Acteurs : ${data.actors}</p>
      <p>Durée : ${data.duration} minutes</p>
      <p>Pays : ${data.countries}</p>
      <p>Box office mondial : ${data.worldwide_gross_income}</p>
      <p>Description : ${data.description}</p>
    </dev>`;
    modal.style.display = "block";
      })
  }