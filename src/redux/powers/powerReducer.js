import { FETCH_POWERS_SUCCESS } from './powerConstants';

const initialState = {
  powers: []
};


const PowerReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POWERS_SUCCESS:
      return { ...state, powers: action.powers };
    default:
      return state;
  }
};

export default PowerReducer;
