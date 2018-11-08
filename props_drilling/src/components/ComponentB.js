import React, { Component } from 'react';

import ComponentC from './childcomponents/ComponentC';

export default class ComponentB extends Component {
  render() {
    return (
      <div>
        <h2>Component B</h2> The message presented here is: {this.props.message}
        <ComponentC message={this.props.message} />
      </div>
    );
  }
}
