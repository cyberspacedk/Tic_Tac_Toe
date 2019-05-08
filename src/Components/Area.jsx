import React from "react";
import styled from "styled-components";

const AreaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  button:hover {
    background-color: #ccc;
  }
`;

const Area = ({ children }) => <AreaWrapper> {children}</AreaWrapper>;

export default Area;
