import { MOVIE_URL, ID_MODAL, ID_MODAL_CONTENT, CLASS_MOVIE_IMG } from "./constants";

/**
 * Create a modal with the informations of the selected movie.
 * @param {number} movieId 
 */
 export function createModal(movieId){
    let modal = document.getElementById(ID_MODAL);
    let modalContent = document.getElementById(ID_MODAL_CONTENT);
    fetch(MOVIE_URL + movieId)
      .then(res => res.json())
      .then(data => {
    modalContent.innerHTML = `
    <img class="${CLASS_MOVIE_IMG}" src=${data.image_url}></img>
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