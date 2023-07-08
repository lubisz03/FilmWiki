import { act } from 'react-dom/test-utils';

const moviesReducerDefaultState = [];

const moviesReducer = (state = moviesReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.movies;
    case 'ADD_MOVIES':
      return [...state, ...action.movies];
    default:
      return state;
  }
};

export default moviesReducer;
