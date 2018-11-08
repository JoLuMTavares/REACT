import React, { Component } from 'react';

export const MyContext = React.createContext();

export default class Context extends Component {
  // This function increments the value of x by 1
  incrementX = () => {
    this.setState({
      x: this.state.x + 1
    });
  };

  // This function decrements the value of y by 1
  decrementY = () => {
    this.setState({
      y: this.state.y - 1
    });
  };

  state = {
    x: 0,
    y: 0,
    incrementX: this.incrementX,
    decrementY: this.decrementY
  };

  render() {
    return (
      <MyContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
