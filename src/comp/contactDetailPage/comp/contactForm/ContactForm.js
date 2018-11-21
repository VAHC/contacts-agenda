import React from 'react';
import PropTypes from 'prop-types';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    props.powersActions.fetchPowers();
    if (props.contactId) props.contactsActions.fetchContact(props.contactId);
    this.state = {
      contact: props.selectedContact
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.contact && props.selectedContact !== null) {
      return ({
        ...state,
        contact: props.selectedContact
      })

    }
    return null;
  }

  handleInputChange = ev => this.setState({ [ev.target.name]: ev.target.value });

  handleOptionSelect = ev => this.setState(oldState => ({
    contact: { ...oldState.contact, powers: [ ...oldState.contact.powers, ev.target.value ] }
  }));

  handleFormSubmit = ev => {
    ev.preventDefault();
    console.log('Save');
  };

  render() {
    const { contact } = this.state;
    return(
      <div className={ 'contact-form' }>
        {
          contact &&
          <form onSubmit={this.handleFormSubmit}>
            <label>Name: <input name={'name'} onChange={this.handleInputChange} value={contact.name}/></label>
            <label>Last Name: <input name={'lastName'} onChange={this.handleInputChange}
                                     value={contact.lastName}/></label>
            <label>Email: <input name={'email'} onChange={this.handleInputChange} value={contact.email}/></label>
            <select onChange={this.handleOptionSelect}>
              {this.props.powers.map(power => <option key={power._id} value={power._id}>{power.name}</option>)}
            </select>
            <label>Poderes</label>
            <ul>
              {contact.powers && contact.powers.map(power => <li>{power}</li>)}
            </ul>
            <input type="submit" value={'Save'}/>
          </form>
        }
      </div>
    )
  }
}

ContactForm.propTypes = {
  contactId: PropTypes.string.isRequired,
  selectedContact: PropTypes.object,
  powers: PropTypes.array,
  powersActions:PropTypes.shape({
    fetchPowers: PropTypes.func
  }).isRequired,
  contactsActions:PropTypes.shape({
    fetchContact: PropTypes.func
  }).isRequired
};

ContactForm.defaultProps = {
  powers: []
};

export default ContactForm;
