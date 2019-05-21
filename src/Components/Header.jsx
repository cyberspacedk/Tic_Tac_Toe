import React from "react";
import styled from "styled-components";

const HeaderTop = styled.div`
  background-color: #3c3c3c;
  height: 100px;
  width: 100vw;
  line-height: 100px;
  text-align: center;
  color: #fff;
  font-size: 2rem;
  box-shadow: 1px 4px 13px 0px #676767;
`;

const Header = () => {
  return <HeaderTop>TIC TAC TOE</HeaderTop>;
};

export default Header;
