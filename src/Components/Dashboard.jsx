import React from "react"; 
import Controls from "./Controls"
import Area from "./Area"; 
import GameStatus from "./GameStatus"; 
import { connect } from "react-redux";
import moveAction from "../Redux/Actions/moveAction";
import turnAction from "../Redux/Actions/turnAction";  
import switchSnapshotAction from "../Redux/Actions/switchSnapshotAction";
import { whoWin} from "../Helpers/helpers"; 
import styled from "styled-components";

const Wrapper = styled.div`
  display:flex;
  min-height:calc(100vh - 100px);
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
`;

const Dashboard = ({ history, turn, makeMove, playerTurn, snapshot, switchSnap}) => {
  
const moveHandler = i => {
  const historyData = history.slice(0, snapshot+1);
  const current = historyData[historyData.length -1];
  const squares = [...current.squares]; 
  if (whoWin(squares) || squares[i]) return; 
  squares[i] = turn ? "X" : "O";    
  makeMove(historyData.concat([{squares: squares}]));
  switchSnap(historyData.length);
	playerTurn(!turn);
};

const switchSnapshot = (pos) => {
  switchSnap(pos);
  const oddEven = pos % 2 === 0;
  playerTurn(oddEven);
}

const historyData = history;
const current = historyData[snapshot]; 
const winner = whoWin(current.squares);  
const printWinner = winner  ? `Win player ${winner}` : `Next turn ${turn ? "X" : "O"}`; 
  
  return (
    <Wrapper> 
      <Controls winner={printWinner} length={historyData.length-1} snapshot={snapshot} switchSnap={switchSnapshot}/> 
      <Area cells={current.squares} onClick={(i)=> moveHandler(i)} />  
      <GameStatus winner={winner}/>
    </Wrapper>
  );
};

const mstp = ({ history, turn, snapshot}) => ({
  history,
  turn, 
  snapshot,
});

const mdtp = dispatch => ({
  makeMove: x => dispatch(moveAction(x)),
  playerTurn: x => dispatch(turnAction(x)),
  switchSnap: x => dispatch(switchSnapshotAction(x))
});
export default connect(mstp, mdtp)(Dashboard);
