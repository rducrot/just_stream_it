/**
* @Class
*/

class Movie{
    /**
     * 
     * @param {number} id 
     * @param {string} url 
     * @param {string} imdb_url 
     * @param {string} title 
     * @param {number} year 
     * @param {string} imdb_score 
     * @param {number} votes 
     * @param {string} image_url 
     * @param {string[]} directors 
     * @param {string[]} actors 
     * @param {string[]} writers 
     * @param {string[]} genres 
     */
    constructor(id, url, imdb_url, title, year, imdb_score,
      votes, image_url, directors, actors, writers, genres){
      this.id = id;
      this.url = url;
      this.imdb_url = imdb_url;
      this.title = title;
      this.year = year;
      this.imdb_score = imdb_score;
      this.votes = votes;
      this.image_url = image_url;
      this.directors = directors;
      this.actors = actors;
      this.writers = writers;
      this.genres = genres;
    }
  }