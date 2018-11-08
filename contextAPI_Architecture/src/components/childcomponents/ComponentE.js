import React, { Component } from 'react';

import { MyContext } from '../../Context';

export default class ComponentE extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <div>
            <h2>Component E</h2> Click here to decrement y:{' '}
            <button onClick={context.state.decrementY}>Decrement Y</button>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
