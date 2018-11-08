import React, { Component } from 'react';
import { connect } from 'react-redux';

class ComponentA extends Component {
  render() {
    return (
      <div>
        <h2>Component B</h2>
        <button
          onClick={this.props.generate}
          title="Generates a new random string"
        >
          Generate
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  a: state.reducer1.a
});

const mapDispatchToProps = dispatch => ({
  generate: () =>
    dispatch({
      type: 'SAVE_STRING'
    })
  // incrementB: () => dispatch({ type: 'INCREMENT_B' })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentA);
