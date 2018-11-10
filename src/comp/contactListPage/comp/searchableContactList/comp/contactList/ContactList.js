import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './comp/ContactListItem/ContactListItem';

const ContactList = ({ contacts }) => (
  <div>
    {
      contacts.map(({ id, lastName, name, email }) => (
        <ContactListItem key={ id } lastName={ lastName } name={ name } email={ email }/>
      ))
    }
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired
};

export default ContactList;
