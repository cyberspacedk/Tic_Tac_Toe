import cellsReducer from "./cellsReducer";
import gamePassReducer from "./gamePassReducer";
import playerScoreReducer from "./playerScoreReducer";
import snapShotReducer from "./snapShotReducer";
import playerReducer from "./turnReducer";

describe("Reducers", () => {

  it("Cells array", () => {
    const initialState = {
      squares: ["", ""]
    };
    const action = {
      type: "MAKE_MOVE",
      payload: {
        squares: ["", ""]
      }
    };
    expect(cellsReducer(initialState, action)).toEqual(action.payload);
  });

  it("Count played games", () => {
    const initialState = 1;
    const action = {
      type: "GAME_OVER",
      payload: 1
    };
    expect(gamePassReducer(initialState, action)).toEqual(action.payload);
  });

  it("Score Player 1", () => {
    const initialState = {
      player1: 0,
      player2: 0
    };
    const action = {
      type: "PLAYER-1"
    };
    expect(playerScoreReducer(initialState, action)).toEqual({
      ...initialState,
      player1: initialState.player1 + 1
    });
  });

  it("Score Player 2", () => {
    const initialState = {
      player1: 0,
      player2: 0
    };
    const action = {
      type: "PLAYER-2"
    };
    expect(playerScoreReducer(initialState, action)).toEqual({
      ...initialState,
      player2: initialState.player2 + 1
    });
  });


  it("Switch snapshot", () => {
    const initialState =  0;
    const action = {
      type : "SWITCH_SNAPSHOT",
      payload: 1,
  };
    expect(snapShotReducer(initialState, action)).toEqual(action.payload);
  });

  it("Switch snapshot", () => {
    const initialState =  true;
    const action = {
      type: "NEXT_MOVE",
      payload: false
    }
    expect(playerReducer(initialState, action)).toEqual(action.payload);
  });


});
