const initialState = Number(JSON.parse(localStorage.getItem("games"))) || 0;

const gamePassReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GAME_OVER":
      return payload;
    default:
      return state;
  }
};

export default gamePassReducer;
