import React from 'react';
import SearchableContactList from './comp/searchableContactList/SearchableContactList';
import './contactListPage.css';

class ContactListPage extends React.Component {
  render() {
    return (
      <div>
        <SearchableContactList />
        <div>informacion irrelevante para la lista</div>
      </div>
  )
  }
}

export default ContactListPage;
