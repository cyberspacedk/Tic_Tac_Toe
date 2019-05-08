import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Dashboard from "./Dashboard";
import GlobalStyles from "../../src/GlobalStyle";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items:center;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Dashboard />
      <GlobalStyles />
    </AppWrapper>
  );
}

export default App;
