import React from "react";
import styled from "styled-components";

import Display from "./Display";

const Calculator = () => {
  return (
    <CalculatorContainer>
      <Display />
    </CalculatorContainer>
  );
};

const CalculatorContainer = styled.div`
  display: grid;
  background-color: #0f0ff9;
  width: 40%;
  height: 80%;
  max-width: 30rem;
  max-height: 40rem;
  border-radius: 2rem;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;
`;

export default Calculator;
