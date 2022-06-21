function createModal(movieId){
  let modal = document.getElementById("modal");
  let modalContent = document.getElementById("modal-content");
  fetch(`http://localhost:8000/api/v1/titles/${movieId}`)
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

/**
 * Add a movie to a movies container.
 * @param {HTMLElement} container The container in which the movie is displayed
 * @param {object} movie 
 */
export function addMovie(container, movie) {
    let movieContainer = document.createElement("div");
    movieContainer.classList.add("movie");
    movieContainer.id = movie.id;
  
    let movieImg = document.createElement("img");
    movieImg.classList.add("movie__img");
    movieImg.src = movie.image_url;
    movieImg.alt = movie.title;
  
    let movieOverlay = document.createElement("div");
    movieOverlay.classList.add("movie__overlay");
  
    let movieTitle = document.createElement("p");
    movieTitle.classList.add("movie__title");
    movieTitle.textContent = movie.title;

    movieContainer.onclick = function() {
      createModal(movie.id);
    }
    
    movieOverlay.appendChild(movieTitle);
    movieContainer.appendChild(movieImg);
    movieContainer.appendChild(movieOverlay);
    container.appendChild(movieContainer);
  }
  
  /**
   * Create a movies container.
   * @param {string} category The name of the fetched category
   * @param {string} categoryName The name displayed for the category
   * @param {HTMLElement} categoriesContainer The categories container
   */
export function addMovieCategory(category, categoryName, categoriesContainer) {
    let categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category");
  
    let categoryTitle = document.createElement("h2");
    categoryTitle.classList.add("category__title");
    categoryTitle.textContent = categoryName
  
    let moviesContainer = document.createElement("div");
    moviesContainer.classList.add("movies-container");

    let leftButton = document.createElement("a");
    leftButton.textContent = "<";
    let rightButton = document.createElement("a");
    rightButton.textContent = ">";
  
    categoryContainer.appendChild(categoryTitle);
    categoryContainer.appendChild(leftButton);
    categoryContainer.appendChild(rightButton);
    categoryContainer.appendChild(moviesContainer);
    categoriesContainer.appendChild(categoryContainer);

    let moviesInContainer = 0;
  
    fetch(`http://localhost:8000/api/v1/titles/?format=json&sort_by=-imdb_score&genre=${category}`)
      .then(res => res.json())
      .then(data => {
        for (let movie of data.results) {
          addMovie(moviesContainer, movie);
          moviesInContainer += 1;
        }
        if (data.previous){
          console.log(data.previous);
          leftButton.href = data.previous;
        }
        if (data.next){
          console.log(data.next);
          rightButton.href = data.next;
          fetch(data.next)
            .then(res => res.json())
            .then(data => {
              for (let movie of data.results) {
                if (moviesInContainer < 7) {
                addMovie(moviesContainer, movie);
                moviesInContainer += 1;
                }
              }
            })
        }
      })
  };