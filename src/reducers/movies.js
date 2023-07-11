import { act } from 'react-dom/test-utils';

const moviesReducerDefaultState = {
  movies: [],
  watchedMovies: [],
  wishlistedMovies: [],
};

const moviesReducer = (state = moviesReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return { ...state, movies: action.movies };
    case 'ADD_MOVIES':
      return { ...state, movies: [...state.movies, ...action.movies] };
    case 'ADD_WATCHED_MOVIE':
      return {
        ...state,
        watchedMovies: [...state.watchedMovies, action.movie],
      };
    case 'REMOVE_WATCHED_MOVIE':
      return state.watchedMovies.filter(({ title }) => title != action.title);
    case 'SET_WATCHED_MOVIES':
      return { ...state, watchedMovies: action.movies };
    case 'ADD_WISHLISTED_MOVIE':
      return {
        ...state,
        wishlistedMovies: [...state.wishlistedMovies, action.movie],
      };
    case 'REMOVE_WISHLISTED_MOVIE':
      return state.wishlistedMovies.filter(
        ({ title }) => title != action.title
      );
    case 'SET_WISHLISTED_MOVIES':
      return { ...state, wishlistedMovies: action.movies };
    default:
      return state;
  }
};

export default moviesReducer;
