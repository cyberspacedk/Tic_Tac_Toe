import React from "react"; 
import Controls from "./Controls"
import Area from "./Area";
import Cell from "./Cell";
import GameStatus from "./GameStatus"; 
import { connect } from "react-redux";
import moveAction from "../Redux/Actions/moveAction";
import turnAction from "../Redux/Actions/turnAction";  
import { whoWin} from "../Helpers/helpers"; 
import styled from "styled-components";

const Wrapper = styled.div`
  display:flex;
  min-height:calc(100vh - 100px);
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
`;

const Dashboard = ({ cells, turn, makeMove, playerTurn}) => {

const moveHandler = i => {
	if (whoWin(cells) || cells[i]) return;
	cells[i] = turn ? "X" : "O";
	makeMove(cells);
	playerTurn(!turn);
};

const winner = whoWin(cells);  
const printWinner = winner  ? `Win player ${winner}` : `Next turn ${turn ? "X" : "O"}`; 
const drawCell = i => <Cell value={cells[i]} click={() => moveHandler(i)} />; 

	

  return (
    <Wrapper> 
      <Controls winner={printWinner}/> 
      <Area>
        {drawCell(0)}
        {drawCell(1)}
        {drawCell(2)} 
        {drawCell(3)}
        {drawCell(4)}
        {drawCell(5)} 
        {drawCell(6)}
        {drawCell(7)}
        {drawCell(8)}
      </Area>
      <GameStatus winner={winner}/>
    </Wrapper>
  );
};

const mstp = ({ cells, turn }) => ({
  cells,
  turn, 
});
const mdtp = dispatch => ({
  makeMove: x => dispatch(moveAction(x)),
  playerTurn: x => dispatch(turnAction(x)) 
});
export default connect(
  mstp,
  mdtp
)(Dashboard);
