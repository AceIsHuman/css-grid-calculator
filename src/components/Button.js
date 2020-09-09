import React from 'react';
import styled from 'styled-components';

const Button = props => {
  const { value, gridRow, gridColumn, color, method } = props;
  const StyledButton = styled.button`
    grid-row: ${gridRow};
    grid-column: ${gridColumn};
    background-color: ${color};
  `;

  return <StyledButton onClick={method}>{value}</StyledButton>;
};

export default Button;
