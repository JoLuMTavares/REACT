import React, { Component } from 'react';
// import { connect } from 'react-redux';
import ComponentB from './childcomponents/ComponentB';

class ComponentA extends Component {
  render() {
    return (
      <div>
        <h2>Component A</h2>
        It imports component B<ComponentB />
      </div>
    );
  }
}

export default ComponentA;
