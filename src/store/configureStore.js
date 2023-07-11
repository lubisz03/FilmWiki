import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from '../reducers/movies';
import genresReducer from '../reducers/genres';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import dropdownReducer from '../reducers/dropdown';
import loadingReducer from '../reducers/loading';
import modalReducer from '../reducers/modal';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  // Store Creation
  const store = createStore(
    combineReducers({
      genres: genresReducer,
      movies: moviesReducer,
      filters: filtersReducer,
      auth: authReducer,
      dropdown: dropdownReducer,
      loading: loadingReducer,
      modal: modalReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
