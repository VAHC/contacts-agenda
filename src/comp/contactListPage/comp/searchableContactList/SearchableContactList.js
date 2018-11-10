import React from 'react';
import SearchContact from './comp/searchContact/SearchContact';
import ContactList from './comp/contactList/ContactList';
import { contactsData } from '../../contactsData';

class SearchableContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contactsData
    }
  }

  handleOnSearch = searchValue => {
    this.setState({
      contacts: contactsData.filter(contact => contact.name.toLowerCase().includes(searchValue.toLowerCase()))
    });
  };

  render() {
    return (
      <div>
        <SearchContact  onSearch={ this.handleOnSearch } />
        <ContactList contacts={ this.state.contacts } />
      </div>
    )
  }
}

export default SearchableContactList;
