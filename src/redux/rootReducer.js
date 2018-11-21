import { combineReducers } from 'redux';
import contacts from './contacts/contactsReducer';
import powers from './powers/powerReducer';

export default combineReducers({
  contacts,
  powers
});
