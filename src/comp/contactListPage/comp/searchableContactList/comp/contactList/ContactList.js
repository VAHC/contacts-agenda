import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ContactListItem from './comp/ContactListItem/ContactListItem';

const ContactList = ({ contacts, history }) => {
  const handleListItemClick = contact => history.push('/contact-detail', { contactId: contact.id });

  return (
    <div className={ 'contact-list' }>
      {
        contacts.map((contact) => (
          <ContactListItem key={ contact.id } contact={ contact } onClick={ handleListItemClick } />
        ))
      }
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(ContactList);
