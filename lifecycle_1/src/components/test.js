import React, { Component } from 'react';

export default class Test extends Component {
  state = {
    test: 'This is the first test',
    derivedX: null
  };
  constructor(props) {
    super(props);
    console.log(
      `Test component is being constructed with props = ${JSON.stringify(
        props
      )} and with state = ${JSON.stringify(this.state)}...`
    );
  }

  // At the beginning the component is mounted/borned
  componentDidMount() {
    console.log('Test component is being mounted...');
  }

  // The component is updated (or not)
  shouldComponentUpdate(nextProps, prevState) {
    console.log(
      `Checking if the component should be updated with nextProps = ${JSON.stringify(
        nextProps
      )} and prevState = ${JSON.stringify(prevState)}...`
    );
    if (nextProps.x % 5 === 0) return false;
    else return true;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { derivedX: nextProps.x * 10 };
  }

  get componentDidUpdate() {
    console.log('Test component updated...');
  }

  componentWillUnmount() {
    console.log('Test component will be unmounted...');
  }

  render() {
    return (
      <div>
        <h2>Test</h2>
        <div>x = {this.props.x}</div>
        <div>derivedX = {this.state.derivedX}</div>
      </div>
    );
  }
}
