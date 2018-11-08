import React, { Component } from 'react';

import './App.css';
import Users from './components/Users';

class App extends Component {
  state = {
    nextId: 1
  };

  constructor(props) {
    super(props);
  }
  nextID = id => {
    let nextId = this.state.nextId;
    nextId = id + 1;
    if (nextId > 10) nextId = 1;
    this.setState({
      nextId: nextId
    });

    return this.state.nextId;
  };
  render() {
    let buttonStyle = {
      borderRadius: '8%',
      backgroundColor: 'black',
      color: 'silver',
      height: '36px',
      boxShadow:
        '0 4px 8px 0 rgba(128, 98, 31, 0.2), 0 6px 20px 0 rgba(128, 98, 31, 0.19)',
      fontSize: '1.0em',
      margin: '2%'
    };

    return (
      <div className="App">
        <h1 style={{ marginLeft: '35%' }}>Current User</h1>
        <Users nextUserHandler={this.nextID} />
        <button
          title="Remove User"
          onClick={() => this.nextID(this.state.nextId)}
          style={buttonStyle}
        >
          Next User
        </button>
      </div>
    );
  }
}

export default App;
