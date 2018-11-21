import React from 'react';
import PropTypes from 'prop-types';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: props.selectedContact
    }
  }

  handleInputChange = ev => this.setState({ [ev.target.name]: ev.target.value });

  handleFormSubmit = ev => {
    ev.preventDefault();
    console.log('Save');
  };

  render() {
    const { contact } = this.state;
    return(
      <div className={ 'contact-form' }>
        <form onSubmit={ this.handleFormSubmit }>
          <label>Name: <input name={ 'name' } onChange={ this.handleInputChange } value={ contact.name } /></label>
          <label>Last Name: <input name={ 'lastName' } onChange={ this.handleInputChange } value={ contact.lastName } /></label>
          <label>Email: <input name={ 'email' }  onChange={ this.handleInputChange } value={ contact.email }/></label>
          <input type="submit" value={ 'Save' } />
        </form>
      </div>
    )
  }
}

ContactForm.propTypes = {
  contactId: PropTypes.string.isRequired,
  selectedContact: PropTypes.object
};

export default ContactForm;
