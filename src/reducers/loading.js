const loadingReducerDefaultState = true;

const loadingReducer = (state = loadingReducerDefaultState, action) => {
  switch (action.type) {
    case 'HANDLE_STOP_LOADING':
      return false;
    case 'HANDLE_START_LOGIN':
      return true;
    default:
      return state;
  }
};

export default loadingReducer;
