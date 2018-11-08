import React, { Component } from 'react';

import './App.css';
import Axios from 'axios';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{ marginLeft: '35%' }}>Users List</h1>
        <Users />
      </div>
    );
  }
}

export default App;
