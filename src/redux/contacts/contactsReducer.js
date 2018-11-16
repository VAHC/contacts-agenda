import { FETCH_CONTACT_SUCCESS, FETCH_CONTACTS_SUCCESS } from './contactsConstants';

const initialState = {
  contacts: [],
  selectedContact: null
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS_SUCCESS:
      return { ...state, contacts: action.contacts };
    case FETCH_CONTACT_SUCCESS:
      return { ...state, selectedContact: action.contact };
    default:
      return state;
  }
};

export default contactsReducer;
