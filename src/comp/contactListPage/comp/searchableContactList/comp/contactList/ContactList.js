import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './comp/ContactListItem/ContactListItem';

const ContactList = ({ contacts, onContactClick }) => {
  // const handleListItemClick = contact => history.push(`/contact-detail?contactId=${ contact.id }`);


  return (
    <div className={ 'contact-list' }>
      {
        contacts.map((contact) => (
          <ContactListItem key={ contact._id } contact={ contact } onClick={ () => onContactClick(contact._id) } />
        ))
      }
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onContactClick: PropTypes.func
};

ContactList.defaultProps = {
  onContactClick: () => null
};

export default ContactList;
