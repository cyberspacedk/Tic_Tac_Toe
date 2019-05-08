const gamePassAction = data => ({
  type: "GAME_OVER",
  payload: data + 1 
});

export default gamePassAction;
