import React from "react";
import Cell from "./Cell";
import styled from "styled-components";

const AreaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  button:hover {
    background-color: #ccc;
  }
`;

const Area = ({ cells, onClick }) => (
  <AreaWrapper> 
    {cells.map((cell, idx) => (
      <Cell value={cell} onClick={() => onClick(idx)} key= {idx} />
    ))}
  </AreaWrapper>
);

export default Area;
