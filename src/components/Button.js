import React from 'react';
import styled from 'styled-components';

const Button = props => {
  const { value, gridRow, gridColumn, color, method } = props;
  const StyledButton = styled.button`
    grid-row: ${gridRow};
    grid-column: ${gridColumn};
    background-color: ${color};
    border-radius: 1rem;
    color: #ffffff;
    font-size: 1.8rem;
    font-family: 'Share Tech Mono';
  `;

  return <StyledButton onClick={method}>{value}</StyledButton>;
};

export default Button;
