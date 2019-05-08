const initialState = Array(9).fill("");

const cellsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "MAKE_MOVE":
      return { ...payload };
    default:
      return state;
  }
};

export default cellsReducer;
