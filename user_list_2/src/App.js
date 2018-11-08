import React, { Component } from 'react';

import './App.css';
import Axios from 'axios';
import Users from './components/Users';
import UserDetails from './components/UserDetails';

import Start from './components/Start';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1 style={{ marginLeft: '35%' }}>Users List - Routing way</h1>
          <div>
            <Link to="/">Start</Link>
            {' | '}
            <Link to="/users">Users</Link>
          </div>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/userdetails/:id" component={UserDetails} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
