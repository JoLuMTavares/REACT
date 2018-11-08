import React, { Component } from 'react';
import { connect } from 'react-redux';
class ComponentD extends Component {
  render() {
    return (
      <div>
        <h2>Component D</h2>
        <button onClick={this.props.incrementB} title="Increments b by 2">
          Increment B
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  b: state.reducer2.b,
  c: state.reducer2.c
});

const mapDispatchToProps = dispatch => ({
  incrementB: () => dispatch({ type: 'INCREMENT_B' })
  // incrementB: () => dispatch({ type: 'INCREMENT_B' })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentD);
