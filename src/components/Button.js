import React from 'react';
import styled from 'styled-components';

const Button = props => {
  const { value, gridRow, gridColumn, color, method } = props;

  return (
    <StyledButton
      onClick={method}
      gridRow={gridRow}
      gridColumn={gridColumn}
      color={color}
    >
      {value}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  grid-row: ${props => props.gridRow};
  grid-column: ${props => props.gridColumn};
  background-color: ${props => props.color};
  border-radius: 1rem;
  color: #ffffff;
  font-size: 1.8rem;
  font-family: 'Share Tech Mono';
`;

export default Button;
