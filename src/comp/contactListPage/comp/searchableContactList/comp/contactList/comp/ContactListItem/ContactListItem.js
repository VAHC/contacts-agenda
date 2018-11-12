import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ name, lastName, email }) => (
  <div className={ 'contact-list-item'}>
    <div>{ `${ name } ${ lastName }` }</div>
    <div>{ email }</div>
  </div>
);

ContactListItem.propTypes = {
  name:PropTypes.string.isRequired,
  lastName:PropTypes.string.isRequired,
  email:PropTypes.string
};

export default ContactListItem;
