import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux - Version 1.2</h1>
        <ComponentB />
        <ComponentC />
      </div>
    );
  }
}

export default App;
