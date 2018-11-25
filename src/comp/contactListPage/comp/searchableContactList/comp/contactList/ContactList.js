import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './comp/ContactListItem/ContactListItem';

const ContactList = ({ contacts, contactsActions }) => {
  const handleContactClick = (contactId) => contactsActions.fetchContact(contactId);
  return (
    <div className={ 'contact-list' }>
      {
        contacts.map(contact => (
          <ContactListItem contact={ contact } onContactClick={ handleContactClick } key={ contact._id } />
        ))
      }
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired
};

export default ContactList;
