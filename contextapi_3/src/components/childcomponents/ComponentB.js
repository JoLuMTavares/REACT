import React, { Component } from 'react';

import { MyContext } from '../../Context';

export default class ComponentB extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <div>
            <h2>Component B</h2> Click here to increment x:{' '}
            <button onClick={() => context.dispatch({ type: 'INCREMENT_X' })}>
              Increment X
            </button>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
