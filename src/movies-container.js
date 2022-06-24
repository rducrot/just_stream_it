import * as constants from "./constants";
import { createModal } from "./modal";

/**
 * Add a single movie to a movies container.
 * @param {HTMLElement} container The container in which the movie is displayed
 * @param {object} movie 
 */
export function getMovie(container, movie) {
    let movieContainer = document.createElement("div");
    movieContainer.classList.add(constants.CLASS_MOVIE);
    movieContainer.id = movie.id;
  
    let movieImg = document.createElement("img");
    movieImg.classList.add(constants.CLASS_MOVIE_IMG);
    movieImg.src = movie.image_url;
    /* Define a default img if there is an error */
    movieImg.onerror = function(){
      movieImg.src = constants.DEFAULT_MOVIE_IMG;
    };
    movieImg.alt = movie.title;
  
    let movieOverlay = document.createElement("div");
    movieOverlay.classList.add(constants.CLASS_MOVIE_OVERLAY);
  
    let movieTitle = document.createElement("p");
    movieTitle.classList.add(constants.CLASS_MOVIE_TITLE);
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
    let moviesContainer = categoryContainer.getElementsByClassName(constants.CLASS_MOVIES_CONTAINER)[0];
    let categoryTitle = categoryContainer.getElementsByClassName(constants.CLASS_CATEGORY_TITLE)[0];
    let leftButton = categoryContainer.getElementsByClassName(constants.CLASS_LEFT_BUTTON)[0];
    let rightButton = categoryContainer.getElementsByClassName(constants.CLASS_RIGHT_BUTTON)[0];

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
          } 
        }
        /* Remove the first movie if the category is Best Movie */
        if (!data.previous && categoryTitle.textContent == constants.BEST_CATEGORY_TITLE){
          moviesContainer.removeChild(moviesContainer.firstChild);
          moviesInContainer -= 1;
        }
        if (data.next){
          rightButton.onclick = function(){
            updateMovies(data.next, categoryContainer);
          }
          fetch(data.next)
            .then(res => res.json())
            .then(data => {
              for (let movie of data.results) {
                if (moviesInContainer < constants.NUMBER_OF_MOVIES_SHOWN) {
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
    categoryContainer.classList.add(constants.CLASS_CATEGORY);
  
    let categoryTitle = document.createElement("h2");
    categoryTitle.classList.add(constants.CLASS_CATEGORY_TITLE);
    categoryTitle.textContent = categoryName
  
    let moviesContainer = document.createElement("div");
    moviesContainer.classList.add(constants.CLASS_MOVIES_CONTAINER);

    let leftButton = document.createElement("button");
    leftButton.classList.add(constants.CLASS_LEFT_BUTTON, constants.CLASS_BUTTON);
    leftButton.textContent = constants.LEFT_BUTTON_CONTENT;

    let rightButton = document.createElement("button");
    rightButton.classList.add(constants.CLASS_RIGHT_BUTTON, constants.CLASS_BUTTON);
    rightButton.textContent = constants.RIGHT_BUTTON_CONTENT;
  
    categoryContainer.appendChild(categoryTitle);
    categoryContainer.appendChild(leftButton);
    categoryContainer.appendChild(rightButton);
    categoryContainer.appendChild(moviesContainer);
    categoriesContainer.appendChild(categoryContainer);
  
    getMovies(constants.CATEGORY_URL + category, categoryContainer);
  };

  /**
   * Update the movies list of a category container.
   * @param {string} url 
   * @param {HTMLElement} moviesContainer 
   */
  function updateMovies(url, categoryContainer){
    let moviesContainer = categoryContainer.getElementsByClassName(constants.CLASS_MOVIES_CONTAINER)[0];
    while(moviesContainer.firstChild) {
      moviesContainer.removeChild(moviesContainer.firstChild);
    }
    getMovies(url, categoryContainer);
  }
  