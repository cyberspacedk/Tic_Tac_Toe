const initialState = true;

const playerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "NEXT_MOVE":
      return payload;
    default:
      return state;
  }
};

export default playerReducer;
