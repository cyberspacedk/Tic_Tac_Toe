import React from "react";
import styled from "styled-components";

const ControlsWrapper = styled.div`
  font-size: 1.2rem;
  padding: 30px;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  span {
    font-size: 2rem;
    color: #da00ffcc;
    font-weight: 700;
	}
	button{
		font-size: 1.5rem;
		border-bottom:2px solid #000;
		transition: all .2s linear; 
	}
	button:hover{
		text-shadow: 4px 6px 3px #989898;
		transition: all .2s linear;
	}
`;

const Controls = ({ winner, length, snapshot, switchSnap }) => {
  
const canForward = snapshot !== length;
const canBack = Boolean(snapshot); 

  return (
    <ControlsWrapper>
			<button name="go-back" onClick={()=> canBack && switchSnap(snapshot-1)}>Step Back</button>
      <span>{winner}</span> 
			<button name="go-forward" onClick={()=> canForward && switchSnap(snapshot+1)}>Step Forward</button> 
    </ControlsWrapper>
  );
};

export default Controls;
