// Set text fliter
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

// Sort by rating
export const sortByRating = () => ({
  type: 'SORT_BY_RATING',
});

// Sort by alphabet
export const sortByAlphabet = () => ({
  type: 'SORT_BY_ALPHABET',
});

// Sort by popularity
export const sortByPopularity = () => ({
  type: 'SORT_BY_POPULARITY',
});

// Set genre name
export const setGenre = (genre) => ({
  type: 'SET_GENRE',
  genre,
});
