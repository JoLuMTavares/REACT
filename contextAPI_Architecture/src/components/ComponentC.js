import React, { Component } from 'react';

import { MyContext } from '../Context';

import ComponentD from './childcomponents/ComponentD';
import ComponentE from './childcomponents/ComponentE';

export default class ComponentC extends Component {
  render() {
    return (
      <div>
        <h2>Component C</h2> It just has the components D and E<ComponentD />
        <ComponentE />
      </div>
    );
  }
}
