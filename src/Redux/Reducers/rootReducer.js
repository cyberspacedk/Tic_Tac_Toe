import { combineReducers } from "redux";
import cellsReducer from "./cellsReducer";
import turnReducer from "./turnReducer";
import gamePassReducer from "./gamePassReducer";
import playerScoreReducer from "./playerScoreReducer";
import snapShotReducer from "./snapShotReducer";

const rootReducer = combineReducers({
  history: cellsReducer,
  turn: turnReducer,
  playedGame: gamePassReducer,
  playerScore : playerScoreReducer,
  snapshot: snapShotReducer
});

export default rootReducer;
