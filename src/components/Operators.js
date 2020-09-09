import React from 'react';

import Button from './Button';

const Operators = props => {
  return (
    <>
      <Button
        value={'C'}
        gridRow="2 / span 1"
        gridColumn="1 / span 3"
        color="red"
      />
      <Button
        value={'÷'}
        gridRow="2 / span 1"
        gridColumn="4 / span 1"
        color="gray"
      />
      <Button
        value={'x'}
        gridRow="3 / span 1"
        gridColumn="4 / span 1"
        color="gray"
      />
      <Button
        value={'-'}
        gridRow="4 / span 1"
        gridColumn="4 / span 1"
        color="gray"
      />
      <Button
        value={'+'}
        gridRow="5 / span 1"
        gridColumn="4 / span 1"
        color="gray"
      />
      <Button
        value={'='}
        gridRow="6 / span 1"
        gridColumn="4 / span 1"
        color="green"
      />
    </>
  );
};

export default Operators;
