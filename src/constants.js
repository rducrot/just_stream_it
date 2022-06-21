export const NUMBER_OF_MOVIES_SHOWN = 7;
export const CATEGORY_URL = "http://localhost:8000/api/v1/titles/?format=json&sort_by=-imdb_score&genre="
export const MOVIE_URL = "http://localhost:8000/api/v1/titles/"

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