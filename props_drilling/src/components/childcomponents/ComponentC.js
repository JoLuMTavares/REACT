import React, { Component } from 'react';

export default class ComponentC extends Component {
  render() {
    return (
      <div>
        <h3>Component C</h3> The message presented here is: {this.props.message}
      </div>
    );
  }
}
