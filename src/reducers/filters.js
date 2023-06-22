// Filters Reducers
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'alphabet',
  genre: '',
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_RATING':
      return { ...state, sortBy: 'rating' };
    case 'SORT_BY_ALPHABET':
      return { ...state, sortBy: 'alphabet' };
    case 'SET_GENRE':
      return { ...state, genre: action.genre };
    default:
      return state;
  }
};

export default filtersReducer;
