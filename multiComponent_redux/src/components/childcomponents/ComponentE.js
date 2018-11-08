import React, { Component } from 'react';
import { connect } from 'react-redux';
class ComponentE extends Component {
  render() {
    return (
      <div>
        <h2>Component E</h2>
        <button onClick={this.props.incrementC} title="Increments c by 2">
          Increment C
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
  incrementC: () => dispatch({ type: 'INCREMENT_C' })
  // incrementB: () => dispatch({ type: 'INCREMENT_B' })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentE);
