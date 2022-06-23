/* SETTINGS */
export const NUMBER_OF_MOVIES_SHOWN = 7;
export const DEFAULT_MOVIE_IMG = "public/images/default.png";
/* URL */
export const BASE_API_URL = "http://localhost:8000";

export const BEST_SCORE_URL = BASE_API_URL + "/api/v1/titles/?format=json&sort_by=-imdb_score";
export const CATEGORY_URL = BASE_API_URL + "/api/v1/titles/?format=json&sort_by=-imdb_score&genre=";
export const MOVIE_URL = BASE_API_URL + "/api/v1/titles/";

/* Movies categories */
export const BEST_CATEGORY = "";
export const BEST_CATEGORY_TITLE = "Films les mieux notés";
export const FIRST_CATEGORY = "Sci-Fi";
export const FIRST_CATEGORY_TITLE = "Science-Fiction";
export const SECOND_CATEGORY = "Adventure";
export const SECOND_CATEGORY_TITLE = "Aventure";
export const THIRD_CATEGORY = "Comedy";
export const THIRD_CATEGORY_TITLE = "Comédie";

export const MOVIES_CATEGORIES = {
    [BEST_CATEGORY]: BEST_CATEGORY_TITLE,
    [FIRST_CATEGORY]: FIRST_CATEGORY_TITLE,
    [SECOND_CATEGORY]: SECOND_CATEGORY_TITLE,
    [THIRD_CATEGORY]: THIRD_CATEGORY_TITLE
  };

/* CSS CLASS */
export const CLASS_BEST_MOVIE_IMG = "best-movie-img";
export const CLASS_BEST_MOVIE_TITLE = "best-movie-title";
export const CLASS_BEST_MOVIE_DESCRIPTION = "best-movie-description";

export const CLASS_CATEGORY = "category";
export const CLASS_CATEGORY_TITLE = "category__title";

export const CLASS_MOVIES_CONTAINER = "movies-container";
export const CLASS_MOVIE = "movie";
export const CLASS_MOVIE_IMG = "movie__img";
export const CLASS_MOVIE_OVERLAY = "movie__overlay";
export const CLASS_MOVIE_TITLE = "movie__title";

export const CLASS_BUTTON = "button";
export const CLASS_LEFT_BUTTON = "left-button";
export const CLASS_RIGHT_BUTTON = "right-button";
export const LEFT_BUTTON_CONTENT = "<";
export const RIGHT_BUTTON_CONTENT = ">";

/* CSS ID */
export const ID_CATEGORIES = "categories"

export const ID_MODAL = "modal";
export const ID_MODAL_IMG = "modal-img";
export const ID_MODAL_TEXT = "modal-text";