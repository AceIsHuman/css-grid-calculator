import React, { useState } from 'react';
import styled from 'styled-components';

import Display from './Display';
import Operators from './Operators';
import Numbers from './Numbers';

import operations from '../helpers/operations';

const Calculator = () => {
  const [total, setTotal] = useState('0');
  const [previousTotal, setPreviousTotal] = useState(0);
  const [operation, setOperation] = useState(null);

  const handleNumber = e => {
    e.preventDefault();
    total === '0' || parseInt(total) === parseInt(previousTotal)
      ? setTotal(e.target.value)
      : setTotal(total + e.target.value);
  };

  const handleOperator = e => {
    e.preventDefault();
    operations[e.target.value]({
      total,
      setTotal,
      previousTotal,
      setPreviousTotal,
      operation,
      setOperation,
    });
  };

  return (
    <CalculatorContainer>
      <Display displayValue={total} />
      <Operators handleOperator={handleOperator} />
      <Numbers handleNumber={handleNumber} />
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
  grid-template-rows: 1.5fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;
`;

export default Calculator;
