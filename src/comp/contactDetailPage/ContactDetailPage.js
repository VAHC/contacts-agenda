import React from 'react';
import ContactForm from './comp/contactForm/ContactForm';
import './contactDetailPage.css';
import { contactsData } from '../contactListPage/contactsData';
import Header from '../layout/header';

class ContactDetailPage extends React.Component {
  render() {
    const contact = contactsData[0];

    return(
      <div>
        <Header title={ `Edicion de contacto` }/>
        <ContactForm contact={ contact } />
      </div>
    )
  }
}


export default ContactDetailPage;
