import React from 'react';
import styled from 'styled-components';

const Display = props => {
  return <DisplayContainer>{props.displayValue}</DisplayContainer>;
};

const DisplayContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #ffffff;
  background-color: #0f0f0f;
  grid-row: 1;
  grid-column: 1 / span 4;
  font-size: 4.2rem;
  padding: 1rem;
  border-radius: 1rem;
  overflow: hidden;

  @media (max-width: 500px) {
    font-size: 3.8rem;
    padding: 0.5px;
  }

  @media (max-width: 450px) {
    font-size: 3.3rem;
    padding: 0.2rem;
  }
`;

export default Display;
