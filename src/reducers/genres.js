const genresReducerDefaultState = [];

const genresReducer = (state = genresReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.genres;
    default:
      return state;
  }
};

export default genresReducer;
