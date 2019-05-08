import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import gamePassAction from "../Redux/Actions/gamePassAction";
import {player1Action, player2Action} from "../Redux/Actions/playersScoreAction";
import { storeResult, setLocal,addScore } from "../Helpers/helpers";


const GameStatusWrapper = styled.div`
	background-color:#3c3c3c;
	padding:10px 0 20px;
	width:100vw;
	text-align:center;
	color: #fff;
	font-size: 1.2rem;
	box-shadow: 1px -4px 13px 0px #676767; 
	p:nth-child(1){
    font-size: 2rem;
	}
	p:nth-child(2){
    color: green
	}
	p:nth-child(3){
    color: orange
	}
`;



const GameStatus = ({ winner, playedGame, playerScore, storePassedGame, playerOne, playerTwo}) => {

const {player1, player2} = playerScore;

  useEffect(() => {
    winner !== null && storeResult(playedGame, storePassedGame);
    addScore(winner,playerOne,playerTwo);  
  },[winner]);

  useEffect(() => {
    setLocal("games", playedGame);
  },[playedGame]);

  useEffect(()=>{
    setLocal("score", playerScore); 
  },[playerScore])

  return (
    <GameStatusWrapper>
      <p>Sets played: {playedGame}</p>
      <p>Player 1 wins : {player1}</p>
      <p>Player 2 wins : {player2}</p>
    </GameStatusWrapper>
  );
};

const mstp = ({ playedGame , playerScore}) => ({
  playedGame, 
  playerScore
});

const mdtp = dispatch => ({
  storePassedGame: x => dispatch(gamePassAction(x)),
  playerOne: ()=> dispatch(player1Action()),
  playerTwo: ()=> dispatch(player2Action())
});

export default connect(
  mstp,
  mdtp
)(GameStatus);
