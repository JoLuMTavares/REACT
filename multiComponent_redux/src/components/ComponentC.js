import React, { Component } from 'react';
// import { connect } from 'react-redux';
import ComponentD from './childcomponents/ComponentD';
import ComponentE from './childcomponents/ComponentE';

class ComponentC extends Component {
  render() {
    return (
      <div>
        <h2>Component C</h2>
        Imports both component D and E<ComponentD />
        <ComponentE />
      </div>
    );
  }
}

export default ComponentC;
