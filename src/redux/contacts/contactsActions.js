import { FETCH_CONTACT_SUCCESS, FETCH_CONTACTS_SUCCESS } from './contactsConstants';
import axios from 'axios';

const fetchContactsSuccess = contacts => ({ type: FETCH_CONTACTS_SUCCESS, contacts });
const fetchContactSuccess = contact => ({ type: FETCH_CONTACT_SUCCESS, contact });

const baseUrl = '/contacts';

export const fetchContacts = searchValue => dispatch  => {
  axios.get(baseUrl)
    .then(response => {
      const contacts = searchValue ? response.data.filter(contact => contact.name.toLowerCase().includes(searchValue.toLowerCase())) : response.data;
      dispatch(fetchContactsSuccess(contacts));
    })
    .catch(error => { throw error; })

};

export const fetchContact = contactId => dispatch => {
  axios.get(`${ baseUrl }/${ contactId }`)
    .then(response => {
      dispatch(fetchContactSuccess(response.data));
    })
    .catch(error => { throw error; })
};
