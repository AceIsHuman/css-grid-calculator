import React from 'react';

import Button from './Button';

const Operators = props => {
  const { handleOperator } = props;
  return (
    <>
      <Button
        value={'C'}
        operator="c"
        gridRow="2 / span 1"
        gridColumn="1 / span 3"
        color="red"
        method={handleOperator}
      />
      <Button
        value={'÷'}
        operator="/"
        gridRow="2 / span 1"
        gridColumn="4 / span 1"
        color="gray"
        method={handleOperator}
      />
      <Button
        value={'x'}
        operator="*"
        gridRow="3 / span 1"
        gridColumn="4 / span 1"
        color="gray"
        method={handleOperator}
      />
      <Button
        value={'-'}
        gridRow="4 / span 1"
        gridColumn="4 / span 1"
        color="gray"
        method={handleOperator}
      />
      <Button
        value={'+'}
        gridRow="5 / span 1"
        gridColumn="4 / span 1"
        color="gray"
        method={handleOperator}
      />
      <Button
        value={'='}
        gridRow="6 / span 1"
        gridColumn="4 / span 1"
        color="green"
        method={handleOperator}
      />
    </>
  );
};

export default Operators;
