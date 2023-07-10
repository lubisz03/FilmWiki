// Filters Reducers
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'alphabet',
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_RATING':
      return { ...state, sortBy: 'rating' };
    case 'SORT_BY_ALPHABET':
      return { ...state, sortBy: 'alphabet' };
    case 'SORT_BY_POPULARITY':
      return { ...state, sortBy: 'popularity' };
    default:
      return state;
  }
};

export default filtersReducer;
