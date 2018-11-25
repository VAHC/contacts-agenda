import React from 'react';
import PropTypes from 'prop-types';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    props.contactsActions.fetchContact(props.contactId);
    props.powersActions.fetchPowers();
    const { name, lastName, email } = props.contact;
    this.state = {
      name,
      lastName,
      email
    };
  }

  handleInputChange = ev => this.setState({ [ev.target.name]: ev.target.value });

  handleFormSubmit = ev => {
    ev.preventDefault();
    console.log('Save');
  };

  render() {
    const { name, lastName, email } = this.state;
    return(
      <div className={ 'contact-form' }>
        <form onSubmit={ this.handleFormSubmit }>
          <label>Name: <input name={ 'name' } onChange={ this.handleInputChange } value={ name } /></label>
          <label>Last Name: <input name={ 'lastName' } onChange={ this.handleInputChange } value={ lastName } /></label>
          <label>Email: <input name={ 'email' }  onChange={ this.handleInputChange } value={ email }/></label>
          <input type="submit" value={ 'Save' } />
          <select>
            {
              this.props.powers.map(power => (
                <option value={ power._id }>{ power.name }</option>
              ))
            }

          </select>
        </form>
      </div>
    )
  }
}

ContactForm.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string
  }).isRequired
};

export default ContactForm;
