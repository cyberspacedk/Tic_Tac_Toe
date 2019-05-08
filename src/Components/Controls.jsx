import React from "react"; 
import styled from "styled-components";

const ControlsWrapper = styled.div`
	font-size: 1.2rem;
	padding:30px;
	width:100vw;
	display:flex;
	justify-content:space-around;
	span{
		font-size: 2rem;
		color: #da00ffcc;
		font-weight:700;
	}
`;

const Controls = ({ winner }) => {
	return <ControlsWrapper>
						<span>{winner}</span>
			</ControlsWrapper>;
};


export default Controls;
