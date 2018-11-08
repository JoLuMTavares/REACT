import React, { Component } from 'react';

export const MyContext = React.createContext();

export default class Context extends Component {
  incrementX = () => {
    this.setState({
      x: this.state.x + 1
    });
  };

  state = {
    x: 0,
    incrementX: this.incrementX
  };

  render() {
    return (
      <MyContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
