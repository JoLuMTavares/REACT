import React, { Component } from 'react';
import { connect } from 'react-redux';
class ComponentB extends Component {
  render() {
    return (
      <div>
        <h2>Component B</h2> x = {this.props.x}{' '}
        <button onClick={this.props.incrementY}>Increment Y</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  x: state.x
});

const mapDispatchToProps = dispatch => ({
  incrementY: () => dispatch({ type: 'INCREMENT_Y' })
  // incrementB: () => dispatch({ type: 'INCREMENT_B' })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentB);
