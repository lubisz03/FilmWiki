const watchedMoviesReducerDefaultState = [];

const watchedMoviesReducer = (
  state = watchedMoviesReducerDefaultState,
  action
) => {
  switch (action.type) {
    case 'ADD_WATCHED_MOVIE':
      return [...state, action.movie];
    case 'REMOVE_WATCHED_MOVIE':
      return state.filter(({ title }) => title != action.title);
    case 'SET_WATCHED_MOVIES':
      return action.movies;
    default:
      return state;
  }
};

export default watchedMoviesReducer;