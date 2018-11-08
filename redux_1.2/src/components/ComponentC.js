import React, { Component } from 'react';
import { connect } from 'react-redux';
class ComponentC extends Component {
  render() {
    return (
      <div>
        <h2>Component C</h2>y = {this.props.y}{' '}
        <button onClick={this.props.incrementX}>Increment X</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  y: state.y
});

const mapDispatchToProps = dispatch => ({
  incrementX: () => dispatch({ type: 'INCREMENT_X' })
  // incrementB: () => dispatch({ type: 'INCREMENT_B' })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentC);
