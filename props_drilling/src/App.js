import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ComponentB from './components/ComponentB';
import ComponentC from './components/childcomponents/ComponentC';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  state = {
    message: 'Test message'
  };
  render() {
    return (
      <Router>
        <div className="App">
          <h1>App PropsDrilling</h1>
          <ComponentB message={this.state.message} />
          <Switch>
            <Route exact path="/componentb" component={ComponentB} />
            <Route exact path="/componentc" component={ComponentC} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
