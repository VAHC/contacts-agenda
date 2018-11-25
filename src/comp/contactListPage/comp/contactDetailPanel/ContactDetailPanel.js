import React from 'react';
import PropTypes from 'prop-types';

const ContactDetailPanel = ({ contact, onEdit }) => (
  contact &&
  <div className={ 'contact-detail-panel' }>
    <p>{ `Nombre: ${ contact.name } ${ contact.lastName }` }</p>
    <p>{ `Email: ${ contact.email }` }</p>
    {
      contact.powers &&
      <div>
        <p>Super Poderes</p>
        <ul>
          { contact.powers.map(power => <li>{ power }</li>) }
        </ul>
      </div>
    }
    <button onClick={ () => onEdit(contact) }>Edit</button>
  </div>
);

ContactDetailPanel.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    powers: PropTypes.array.isRequired
  }).isRequired,
  onEdit: PropTypes.func
};

export default ContactDetailPanel;
