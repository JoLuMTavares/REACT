import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ComponentA from './components/ComponentA';
import ComponentC from './components/ComponentC';

import MyProvider, { MyContext } from './Context';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  state = {
    message: 'Test message'
  };
  render() {
    return (
      <MyProvider>
        <MyContext.Consumer>
          {context => (
            <div className="App">
              <h1>Multilayered Components with Context API</h1>
              <ComponentA message={this.state.message} />
              <ComponentC />
            </div>
          )}
        </MyContext.Consumer>
      </MyProvider>
    );
  }
}

export default App;
