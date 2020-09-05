import React from "react";
import styled from "styled-components";

import Calculator from "./components/Calculator";

function App() {
  return (
    <AppContainer>
      <Calculator />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default App;
