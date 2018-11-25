import React from 'react';
import SearchableContactList from './comp/searchableContactList/SearchableContactListConnector';
import './contactListPage.css';
import Header from '../layout/header';
import ContactDetailPanel from './comp/contactDetailPanel/ContactDetailPanelConnector';

class ContactListPage extends React.Component {
  handleEditClick = contact => this.props.history.push('/contact-detail', { contactId: contact._id })
  render() {
    return (
      <div>
        <Header title={ 'Lista de Contactos' }/>
        <SearchableContactList />
        <ContactDetailPanel onEdit={ this.handleEditClick } />
      </div>
    )
  }
}

export default ContactListPage;
