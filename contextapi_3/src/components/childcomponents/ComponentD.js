import React, { Component } from 'react';

import { MyContext } from '../../Context';

export default class ComponentD extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <div>
            <h2>Component D</h2> This one now shows the values of x ->{' '}
            {context.x} and y -> {context.y}
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
