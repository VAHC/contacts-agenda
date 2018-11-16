import React from 'react';
import SearchableContactList from './comp/searchableContactList/SearchableContactListConnector';
import './contactListPage.css';
import Header from '../layout/header';

class ContactListPage extends React.Component {
  render() {
    return (
      <div>
        <Header title={ 'Lista de Contactos' }/>
        <SearchableContactList />
      </div>
    )
  }
}

export default ContactListPage;
