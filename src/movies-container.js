import { NUMBER_OF_MOVIES_SHOWN, CATEGORY_URL } from "./constants";
import { createModal } from "./modal";

/**
 * Add a single movie to a movies container.
 * @param {HTMLElement} container The container in which the movie is displayed
 * @param {object} movie 
 */
export function getMovie(container, movie) {
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
   * Get a list of movies and display it in a movies container.
   * @param {string} url 
   * @param {HTMLHtmlElement} categoryContainer 
   */
  function getMovies(url, categoryContainer){
    let moviesContainer = categoryContainer.getElementsByClassName("movies-container")[0];
    let leftButton = categoryContainer.getElementsByClassName("left-button")[0];
    let rightButton = categoryContainer.getElementsByClassName("right-button")[0];

    let moviesInContainer = 0;
  
    fetch(url)
      .then(res => res.json())
      .then(data => {
        for (let movie of data.results) {
          getMovie(moviesContainer, movie);
          moviesInContainer += 1;
        }
        if (data.previous){
          leftButton.onclick = function(){
            updateMovies(data.previous, categoryContainer);
          };
        }
        if (data.next){
          rightButton.onclick = function(){
            updateMovies(data.next, categoryContainer);
          }
          fetch(data.next)
            .then(res => res.json())
            .then(data => {
              for (let movie of data.results) {
                if (moviesInContainer < NUMBER_OF_MOVIES_SHOWN) {
                getMovie(moviesContainer, movie);
                moviesInContainer += 1;
                }
              }
            })
        }
      })
  }
  
  /**
   * Create a movies category container.
   * @param {string} category The name of the fetched category
   * @param {string} categoryName The name displayed for the category
   * @param {HTMLElement} categoriesContainer The categories container
   */
export function createMovieCategory(category, categoryName, categoriesContainer) {
    let categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category");
  
    let categoryTitle = document.createElement("h2");
    categoryTitle.classList.add("category__title");
    categoryTitle.textContent = categoryName
  
    let moviesContainer = document.createElement("div");
    moviesContainer.classList.add("movies-container");

    let leftButton = document.createElement("button");
    leftButton.classList.add("left-button", "button");
    leftButton.textContent = "<";

    let rightButton = document.createElement("button");
    rightButton.classList.add("right-button", "button");
    rightButton.textContent = ">";
  
    categoryContainer.appendChild(categoryTitle);
    categoryContainer.appendChild(leftButton);
    categoryContainer.appendChild(rightButton);
    categoryContainer.appendChild(moviesContainer);
    categoriesContainer.appendChild(categoryContainer);
  
    getMovies(CATEGORY_URL + category, categoryContainer);
  };

  /**
   * Update the movies list of a category container.
   * @param {string} url 
   * @param {HTMLElement} moviesContainer 
   */
  function updateMovies(url, categoryContainer){
    let moviesContainer = categoryContainer.getElementsByClassName("movies-container")[0];
    while(moviesContainer.firstChild) {
      moviesContainer.removeChild(moviesContainer.firstChild);
    }
    getMovies(url, categoryContainer);
  }