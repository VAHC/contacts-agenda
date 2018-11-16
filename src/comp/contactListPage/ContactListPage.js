import React from 'react';
import PropTypes from 'prop-types';
import SearchableContactList from './comp/searchableContactList/SearchableContactListConnector';
import './contactListPage.css';
import Header from '../layout/header';
import ContactDetailPanel from './comp/contactDetailPanel/ContactDetailPanelConnector';

class ContactListPage extends React.Component {
  handleContactEditClick = contactId => this.props.history.push(`/contact-detail?contactId=${ contactId}`);

  render() {
    return (
      <div>
        <Header title={ 'Lista de Contactos' }/>
        <SearchableContactList />
        <ContactDetailPanel onEdit={ this.handleContactEditClick } />
      </div>
    )
  }
}

ContactListPage.propTypes = {
  history: PropTypes.object.isRequired
};

export default ContactListPage;
