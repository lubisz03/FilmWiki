const genresReducerDefaultState = { genres: [], genre: '' };

const genresReducer = (state = genresReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return { ...state, genres: action.genres };
    case 'SET_GENRE':
      return { ...state, genre: action.genre };
    default:
      return state;
  }
};

export default genresReducer;
