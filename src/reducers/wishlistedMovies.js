const wishlistedMoviesReducerDefaultState = [];

const wishlistedMoviesReducer = (
  state = wishlistedMoviesReducerDefaultState,
  action
) => {
  switch (action.type) {
    case 'ADD_WISHLISTED_MOVIE':
      return [...state, action.movie];
    case 'REMOVE_WISHLISTED_MOVIE':
      return state.filter(({ title }) => title != action.title);
    case 'SET_WISHLISTED_MOVIES':
      return action.movies;
    default:
      return state;
  }
};

export default wishlistedMoviesReducer;
