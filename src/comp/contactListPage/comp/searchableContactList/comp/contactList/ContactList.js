import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './comp/ContactListItem/ContactListItem';

const ContactList = ({ contacts }) => (
  <div className={ 'contact-list' }>
    {
      contacts.map((contact) => (
        <ContactListItem key={ contact.id } lastName={ contact.lastName } name={ contact.name } email={ contact.email } />
      ))
    }
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired
};

export default ContactList;
