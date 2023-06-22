// Add Watched Movie
export const addWatchedMovie = (movie) => ({
  type: 'ADD_WATCHED_MOVIE',
  movie,
});

// Remove Watched Movie
export const removeWatchedMovie = (movie) => ({
  type: 'REMOVE_WATCHED_MOVIE',
  name: movie.name,
});

// Set Watched Movies
export const setWatchedMovies = (movies) => ({
  type: 'SET_WATCHED_MOVIES',
  movies,
});
