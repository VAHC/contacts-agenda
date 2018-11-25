import { SET_CONTACT, SET_CONTACTS } from './contactsConstants';
import axios from 'axios';

const url = '/contacts';
const setContacts = contacts => ({ type: SET_CONTACTS, contacts });
const setContact = contact => ({ type: SET_CONTACT, contact });


export const fetchContacts = searchValue => dispatch => {
  axios.get(url)
    .then(response => {
      dispatch(setContacts(searchValue ? response.data.filter(contact => contact.name.toLowerCase().includes(searchValue.toLowerCase())) :  response.data));
    })
    .catch(error => { throw error; })
};

export const fetchContact = contactId => dispatch => {
  axios.get(`${ url }/${ contactId }`)
    .then(response => {
      dispatch(setContact(response.data));
    })
    .catch(error => { throw error; })
};
