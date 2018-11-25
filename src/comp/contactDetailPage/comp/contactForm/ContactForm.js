import React from 'react';
import PropTypes from 'prop-types';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    props.contactsActions.fetchContact(props.contactId);
    props.powersActions.fetchPowers();
    this.state = {
      contact: null
    }
  }

  static getDerivedStateFromProps(props, state) {
    if(state.contact !== props.contact) {
      return { ...state, contact: props.contact }
    }
    return null;
  }

  handleInputChange = ev => this.setState({ [ev.target.name]: ev.target.value });

  handleFormSubmit = ev => {
    ev.preventDefault();
    console.log('Save');
  };

  render() {
    return(
      this.state.contact &&
      <div className={ 'contact-form' }>
        <form onSubmit={ this.handleFormSubmit }>
          <label>Name: <input name={ 'name' } onChange={ this.handleInputChange } value={ this.state.contact.name } /></label>
          <label>Last Name: <input name={ 'lastName' } onChange={ this.handleInputChange } value={ this.state.contact.lastName } /></label>
          <label>Email: <input name={ 'email' }  onChange={ this.handleInputChange } value={ this.state.contact.email }/></label>
          <select>
            {
              this.props.powers.map(power => (
                <option key={ power._id } value={ power._id }>{ power.name }</option>
              ))
            }

          </select>
          <div>
            <input type="submit" value={ 'Save' } />
          </div>
        </form>
      </div>
    )
  }
}

ContactForm.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    powers: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string
    }))
  })
};

export default ContactForm;
