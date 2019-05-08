const initial = {
  player1: 0,
  player2: 0
}; 

const local ={
  ...JSON.parse(localStorage.getItem("score"))
}

const initialState = Object.keys(local).length ? {...local} : {...initial}; 

const playerScoreReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "PLAYER-1":
      return { ...state, player1: state.player1 + 1 };
    case "PLAYER-2":
      return { ...state, player2: state.player2 + 1 };
    default:
      return state;
  }
};

export default playerScoreReducer;