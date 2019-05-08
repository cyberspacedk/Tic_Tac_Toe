import { combineReducers } from "redux";
import cellsReducer from "./cellsReducer";
import turnReducer from "./turnReducer";
import gamePassReducer from "./gamePassReducer";
import playerScoreReducer from "./playerScoreReducer";

const rootReducer = combineReducers({
  cells: cellsReducer,
  turn: turnReducer,
  playedGame: gamePassReducer,
  playerScore : playerScoreReducer,
});

export default rootReducer;
