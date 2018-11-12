import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import SideBar from './comp/layout/Sidebar';
import AppBody from './comp/layout/AppBody';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <SideBar />
            <AppBody />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
