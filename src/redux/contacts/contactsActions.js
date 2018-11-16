import { contactsData } from '../../comp/contactListPage/contactsData';
import { FETCH_CONTACTS_SUCCESS } from './contactsConstants';

const fetchContactsSuccess = contacts => ({ type: FETCH_CONTACTS_SUCCESS, contacts });

export const fetchContacts = searchValue => dispatch  => {
  const contacts = searchValue ? contactsData.filter(contact => contact.name.toLowerCase().includes(searchValue.toLowerCase())) : contactsData;
  dispatch(fetchContactsSuccess(contacts));
};
