import React from 'react';
import PropTypes from 'prop-types'
import ContactForm from './comp/contactForm/ContactForm';
import './contactDetailPage.css';
import Header from '../layout/header';

class ContactDetailPage extends React.Component {
  render() {
    const { contactId } = this.props.history.location.state;

    return(
      <div>
        <Header title={ `Edicion de contacto` }/>
        <ContactForm contactId={ contactId } />
      </div>
    )
  }
}

ContactDetailPage.propTypes = {
  history: PropTypes.object.isRequired
};

export default ContactDetailPage;
