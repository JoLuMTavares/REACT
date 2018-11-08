const initialState = {
  a: ''
};

export default function(state = initialState, action) {
  if (action.type === 'SAVE_STRING') {
    return {
      ...state,
      a: Math.random()
        .toString(36)
        .substring(3)
    };
  } else return state;
}
