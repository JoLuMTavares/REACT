import React, { Component } from 'react';

import ComponentB from './childcomponents/ComponentB';

export default class ComponentA extends Component {
  render() {
    return (
      <div>
        <h2>Component A</h2> The message presented here is: {this.props.message}
        <ComponentB />
      </div>
    );
  }
}
