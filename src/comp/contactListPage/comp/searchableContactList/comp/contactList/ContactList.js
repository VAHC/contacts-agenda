import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './comp/ContactListItem/ContactListItem';

const ContactList = ({ contacts }) => (
  <div className={ 'contact-list' }>
    {
      contacts.map(({ _id, lastName, name, email }) => (
        <ContactListItem key={ _id } lastName={ lastName } name={ name } email={ email }/>
      ))
    }
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired
};

export default ContactList;
