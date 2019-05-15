import React from "react";
import styled from "styled-components";

const CellBox = styled.button`
  width: 100px;
  height: 100px;
  line-height: 100px;
  background: #fff;
  border: 1px solid #999;
  font-size: 2.5rem;
  font-weight: bold;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
`;

const Cell = ({ value, onClick }) =>  <CellBox name="cell" onClick={onClick}>{value}</CellBox>; 
export default Cell;
