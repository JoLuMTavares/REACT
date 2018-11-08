import React, { Component } from 'react';

import { MyContext } from '../Context';

export default class ComponentC extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => {
          return <div>C - The value is -> {context.state.x}</div>;
        }}
      </MyContext.Consumer>
    );
  }
}
