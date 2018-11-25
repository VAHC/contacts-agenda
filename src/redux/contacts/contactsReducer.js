import { SET_CONTACT, SET_CONTACTS } from './contactsConstants';

const initialState = {
  contacts: [],
  selectedContact: null
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return { ...state, contacts: action.contacts };
    case SET_CONTACT:
      return { ...state, selectedContact: action.contact };
    default:
      return state;
  }
};

export default contactsReducer;
