import React, { Component } from 'react';

import { MyContext } from '../../Context';

export default class ComponentD extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <div>
            <h2>Component D</h2> This one now shows the values of x ->{' '}
            {context.state.x} and y -> {context.state.y}
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
