import { contactsData } from '../../comp/contactListPage/contactsData';
import { FETCH_CONTACT_SUCCESS, FETCH_CONTACTS_SUCCESS } from './contactsConstants';

const fetchContactsSuccess = contacts => ({ type: FETCH_CONTACTS_SUCCESS, contacts });
const fetchContactSuccess = contact => ({ type: FETCH_CONTACT_SUCCESS, contact });

export const fetchContacts = searchValue => dispatch  => {
  const contacts = searchValue ? contactsData.filter(contact => contact.name.toLowerCase().includes(searchValue.toLowerCase())) : contactsData;
  dispatch(fetchContactsSuccess(contacts));
};

export const fetchContact = contactId => dispatch => {
  const contact = contactsData.find(contact => contact.id === contactId);
  dispatch(fetchContactSuccess(contact));
};
