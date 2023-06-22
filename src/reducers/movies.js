const moviesReducerDefaultState = [];

const moviesReducer = (state = moviesReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.movies;
    default:
      return state;
  }
};

export default moviesReducer;
