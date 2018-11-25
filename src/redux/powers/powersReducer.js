import { SET_POWERS } from './powersConstants';

const initialState = {
  powers: []
};

const powersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POWERS:
      return { ...state, powers: action.powers };
    default:
      return state;
  }
};

export default powersReducer;
