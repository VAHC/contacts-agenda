import React from 'react';
import SearchContact from './comp/searchContact/SearchContact';
import ContactList from './comp/contactList/ContactList';
import axios from 'axios';

class SearchableContactList extends React.Component {
  constructor(props) {
    super(props);
    axios.get('/contacts')
      .then(response => {
        this.setState({ contacts: response.data });
      })
      .catch(error => { throw error; });
    this.state = {
      contacts: []
    }
  }

  handleOnSearch = searchValue => {
    axios.get('/contacts')
      .then(response => {
        this.setState({ contacts: response.data.filter(contact => contact.name.toLowerCase().includes(searchValue.toLowerCase())) });
      })
      .catch(error => { throw error; });
  };

  render() {
    return (
      <div className={ 'searchable-contact-list' }>
        <SearchContact  onSearch={ this.handleOnSearch } />
        <ContactList contacts={ this.state.contacts } />
      </div>
    )
  }
}

export default SearchableContactList;
