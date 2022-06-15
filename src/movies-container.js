/**
 * Add a movie to a movies container.
 * @param {HTMLElement} container The container in which the movie is displayed
 * @param {object} movie 
 */
export function addMovie(container, movie) {
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
  
  /**
   * Create a movies container.
   * @param {string} category The name of the fetched category
   * @param {string} categoryName The name displayed for the category
   * @param {HTMLElement} categories The categories container
   */
export function addMovieCategory(category, categoryName, categories) {
    let categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category");
  
    let categoryTitle = document.createElement("h2");
    categoryTitle.classList.add("category__title");
    categoryTitle.textContent = categoryName
  
    let moviesContainer = document.createElement("div");
    moviesContainer.classList.add("movies-container");
  
    categoryContainer.appendChild(categoryTitle);
    categoryContainer.appendChild(moviesContainer)
    categories.appendChild(categoryContainer);
  
    fetch(`http://localhost:8000/api/v1/titles/?format=json&sort_by=-imdb_score&genre=${category}`)
      .then(res => res.json())
      .then(function (data) {
        for (let movie of data.results) {
          addMovie(moviesContainer, movie);
        }
      })
  };