import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from '../reducers/movies';
import genresReducer from '../reducers/genres';
import watchedMoviesReducer from '../reducers/watchedMovies';
import wishlistedMoviesReducer from '../reducers/wishlistedMovies';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import dropdownReducer from '../reducers/dropdown';
import loadingReducer from '../reducers/loading';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  // Store Creation
  const store = createStore(
    combineReducers({
      genres: genresReducer,
      movies: moviesReducer,
      watchedMovies: watchedMoviesReducer,
      wishlistedMovies: wishlistedMoviesReducer,
      filters: filtersReducer,
      auth: authReducer,
      dropdown: dropdownReducer,
      loading: loadingReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
