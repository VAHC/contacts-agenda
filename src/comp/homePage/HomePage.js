import React, { Component } from 'react';
import ContactListPage from '../contactListPage/ContactListPage';
import SearchableContactList from '../contactListPage/comp/searchableContactList/SearchableContactList';

class HomePage extends Component {
  render() {
    return (
      <div>
        Home Page
        <SearchableContactList />
      </div>
    )
  }
}

export default HomePage;
