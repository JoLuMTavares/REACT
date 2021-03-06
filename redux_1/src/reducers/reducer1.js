const initialState = {
  a: 0,
  b: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_X':
      return {
        ...state,
        x: state.x + 1
      };
    case 'DECREMENT_Y':
      return {
        ...state,
        y: state.y - 1
      };

    default:
      return state;
  }
}
