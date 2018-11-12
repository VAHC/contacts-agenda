import React from 'react';
import ContactForm from './comp/contactForm/ContactForm';
import './contactDetailPage.css';
import { contactsData } from '../contactListPage/contactsData';

class ContactDetailPage extends React.Component {
  render() {
    return(
      <div>
        <h2>Contact detail</h2>
        <ContactForm contact={ contactsData[0] } />
      </div>
    )
  }
}


export default ContactDetailPage;
