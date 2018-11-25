import { combineReducers } from 'redux';
import contacts from '../redux/contacts/contactsReducer';
import powers from '../redux/powers/powersReducer';

export default combineReducers({
  powers,
  contacts
});
