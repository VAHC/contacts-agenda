import React, { Component } from 'react';
import HomePage from './comp/homePage/HomePage'
import './App.css';
import ContactListPage from './comp/contactListPage/ContactListPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
