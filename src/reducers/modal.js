const modalReducerDefaultState = {
  isOpen: false,
  data: {},
  watched: false,
  wishlisted: false,
};

const modalReducer = (state = modalReducerDefaultState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        isOpen: true,
        data: { ...action.movie },
        watched: action.watched,
        wishlisted: action.wishlisted,
      };
    case 'CLOSE_MODAL':
      return {
        isOpen: false,
        data: {},
        watched: action.watched,
        wishlisted: action.wishlisted,
      };
    default:
      return state;
  }
};

export default modalReducer;
