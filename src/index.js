import Movie from "./movie";

let bestMovieContainer = document.getElementById("best-movie");
let bestMovieTitle = document.createElement("p");
bestMovieTitle.textContent = "Star Wars";
bestMovieContainer.appendChild(bestMovieTitle);
let moviesByScore = "";
fetch("http://localhost:8000/api/v1/titles/?format=json&sort_by=-imdb_score")
                      .then(function(res){
                        moviesByScore = res;
                      });
console.log(moviesByScore);

function createCategories(){
  
}