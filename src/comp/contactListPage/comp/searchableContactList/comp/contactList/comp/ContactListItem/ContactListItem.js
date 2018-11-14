import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ contact, onClick }) => {
  const handleOnClick = () => onClick(contact);

  return (
    <div className={ 'contact-list-item' } onClick={ handleOnClick }>
      <div>{ `${ contact.name } ${ contact.lastName }` }</div>
      <div>{ contact.email }</div>
    </div>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func
};

ContactListItem.default = {
  onClick: () => null
};

export default ContactListItem;
