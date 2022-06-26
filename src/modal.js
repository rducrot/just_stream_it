import { MOVIE_URL, ID_MODAL, ID_MODAL_IMG, ID_MODAL_TEXT, DEFAULT_MOVIE_IMG } from "./constants";

/**
 * Create a modal with the informations of the selected movie.
 * @param {number} movieId 
 */
 export function createModal(movieId){
    let modal = document.getElementById(ID_MODAL);
    let modalImg = document.getElementById(ID_MODAL_IMG);
    let modalText = document.getElementById(ID_MODAL_TEXT);
    fetch(MOVIE_URL + movieId)
      .then(res => res.json())
      .then(data => {
        modalImg.src = data.image_url
        /* Define a default img if there is an error */
        modalImg.onerror = function(){
            modalImg.src = DEFAULT_MOVIE_IMG;
        };
        modalText.innerHTML = `
            <p>Titre : ${data.title}</p>
            <p>Genre(s) : ${data.genres}</p>
            <p>Date de publication : ${data.date_published}</p>
            <p>Score : ${data.rated}</p>
            <p>Score Imbd : ${data.imdb_score}</p>
            <p>Directeur(s) : ${data.directors}</p>
            <p>Acteurs : ${data.actors}</p>
            <p>Durée : ${data.duration} minutes</p>
            <p>Pays : ${data.countries}</p>
            <p>Box office mondial : ${data.worldwide_gross_income ? data.worldwide_gross_income : "Non classé"}</p>
            <p>Description : ${data.description}</p>`
        modal.style.display = "block";
      })
  }
