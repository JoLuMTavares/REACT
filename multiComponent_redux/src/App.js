import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import ComponentA from './components/ComponentA';
import ComponentC from './components/ComponentC';
import { connect } from 'react-redux';

class App extends Component {
  componentDidUpdate() {
    if (this.props.b > 10 || this.props.c > 11) this.props.resetValues();
  }
  render() {
    return (
      <div className="App">
        <h1>Redux - Multicomponents</h1>
        Values -> a = {this.props.a}, b = {this.props.b}, c = {this.props.c}{' '}
        <ComponentA />
        <ComponentC />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  a: state.reducer1.a,
  b: state.reducer2.b,
  c: state.reducer2.c
});

const mapDispatchToProps = dispatch => ({
  resetValues: () => dispatch({ type: 'RESET' })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
