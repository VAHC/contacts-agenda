import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ contact, onContactClick }) => (
  <div className={ 'contact-list-item'} onClick={ () => onContactClick(contact._id) }>
    <div>{ `${ contact.name } ${ contact.lastName }` }</div>
    <div>{ contact.email }</div>
  </div>
);

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name:PropTypes.string.isRequired,
    lastName:PropTypes.string.isRequired,
    email:PropTypes.string
  }).isRequired,
  onContactClick: PropTypes.func
};

ContactListItem.defaultProps = {
  onContactClick: () => null
};

export default ContactListItem;
