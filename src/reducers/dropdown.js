const dropdownReducerDefaultState = {
  nav: false,
  genres: false,
  account: false,
  sort: false,
};

const dropdownReducer = (state = dropdownReducerDefaultState, action) => {
  switch (action.type) {
    case 'CLOSE_ALL':
      return { nav: false, genres: false, account: false, sort: false };
    case 'TOGGLE_NAV':
      if (state.nav === true) {
        return { nav: false, genres: false, account: false, sort: false };
      } else {
        return { ...state, nav: !state.nav, sort: false };
      }
    case 'TOGGLE_GENRES':
      if (state.account === true) {
        return { ...state, genres: !state.genres, account: false, sort: false };
      } else {
        return { ...state, genres: !state.genres, sort: false };
      }
    case 'TOGGLE_ACCOUNT':
      if (state.genres === true) {
        return {
          ...state,
          genres: false,
          account: !state.account,
          sort: false,
        };
      } else {
        return { ...state, account: !state.account, sort: false };
      }
    case 'TOGGLE_SORT':
      return { sort: !state.sort, nav: false, genres: false, account: false };
    default:
      return state;
  }
};

export default dropdownReducer;
