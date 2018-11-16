import { FETCH_CONTACTS_SUCCESS } from './contactsConstants';

const initialState = {
  contacts: []
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS_SUCCESS:
      return { ...state, contacts: action.contacts };
    default:
      return state;
  }
};

export default contactsReducer;
