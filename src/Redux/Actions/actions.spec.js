// import gamePassAction from "./gamePassAction";
// import moveAction from "./moveAction";
// import { player1Action, player2Action } from "./playersScoreAction";
// import switchSnapshotAction from "./switchSnapshotAction";
// import turnAction from "./turnAction";

// describe("Actions testing", () => {

//   it("Make move", () => {
//     const expetedAction = {
//       type: "MAKE_MOVE",
//       payload: [{ squares: [] }]
//     };
//     expect(moveAction()).toEqual(expetedAction);
//   });

//   it("Next turn", () => {
//     const expectedAction = {
//       type: "NEXT_MOVE",
//       payload: true
//     };
//     expect(turnAction()).toEqual({ expectedAction });
//   });

//   it("Switch snapshot", () => {
//     const expectedAction = {
//       type: "SWITCH_SNAPSHOT",
//       payload: 1
//     };
//     expect(switchSnapshotAction()).toEqual(expectedAction);
//   });

//   it("End game", () => {
//     const expectedAction = {
//       type: "GAME_OVER",
//       payload: 1
//     };
//     expect(gamePassAction()).toEqual(expectedAction);
//   });

//   it("Player - 1", () => {
//     expect(player1Action()).toEqual({
//       type: "PLAYER-1"
//     });
//   });

//   it("Player - 2", () => {
//     expect(player2Action()).toEqual({
//       type: "PLAYER-2"
//     });
//   });
// });
