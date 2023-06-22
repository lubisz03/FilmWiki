// Add Wishlisted Movie
export const addWishlistedMovie = (movie) => ({
  type: 'ADD_WISHLISTED_MOVIE',
  movie,
});

// Remove Wishlisted Movie
export const removeWishlistedMovie = (movie) => ({
  type: 'REMOVE_WISHLISTED_MOVIE',
  name: movie.name,
});

// Set Wishlisted Movies
export const setWishlistedMovies = (movies) => ({
  type: 'SET_WISHLISTED_MOVIES',
  movies,
});
