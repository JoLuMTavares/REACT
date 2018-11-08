import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ComponentB from './components/ComponentB';

import MyProvider, { MyContext } from './Context';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Context from './Context';

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
              <h1>Context API</h1>
              <button onClick={context.state.incrementX}>Increment X</button>
              {/* <h5>x = {context.state.x}</h5> */}
              <ComponentB message={this.state.message} />
            </div>
          )}
        </MyContext.Consumer>
      </MyProvider>
    );
  }
}

export default App;
