import React from 'react';
import PropTypes from 'prop-types';

const ContactDetailPanel = ({ contact, onEdit }) => {
  const handleOnEditClick = () => onEdit(contact.id);

  return (
    <div>
      {
        contact &&
        <div className={ 'contact-detail-panel' }>
          <p>{ `Nombre: ${ contact.name } ${ contact.lastName }` }</p>
          <p>{ `Email: ${ contact.email }` }</p>
          {
            contact.powers &&
            <div>
              <p>Super Poderes</p>
              <ul>
                { contact.powers.map(power => <li key={ power.replace(/ /g, '')  }>{ power }</li>) }
              </ul>
            </div>
          }
          { onEdit && <button onClick={ handleOnEditClick }>Edit</button> }
        </div>
      }
    </div>
  );
}

ContactDetailPanel.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    powers: PropTypes.array.isRequired
  }),
  onEdit: PropTypes.func
};

export default ContactDetailPanel;
