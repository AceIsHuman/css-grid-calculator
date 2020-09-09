import React from 'react';
import Button from './Button';

const Numbers = props => {
  return (
    <>
      <Button
        value="0"
        gridRow="6 / span 1"
        gridColumn="1 / span 3"
        color="darkgray"
      />
      <Button
        value="1"
        gridRow="5 / span 1"
        gridColumn="1 / span 1"
        color="darkgray"
      />
      <Button
        value="2"
        gridRow="5 / span 1"
        gridColumn="2 / span 1"
        color="darkgray"
      />
      <Button
        value="3"
        gridRow="5 / span 1"
        gridColumn="3 / span 1"
        color="darkgray"
      />
      <Button
        value="4"
        gridRow="4 / span 1"
        gridColumn="1 / span 1"
        color="darkgray"
      />
      <Button
        value="5"
        gridRow="4 / span 1"
        gridColumn="2 / span 1"
        color="darkgray"
      />
      <Button
        value="6"
        gridRow="4 / span 1"
        gridColumn="3 / span 1"
        color="darkgray"
      />
      <Button
        value="7"
        gridRow="3 / span 1"
        gridColumn="1 / span 1"
        color="darkgray"
      />
      <Button
        value="8"
        gridRow="3 / span 1"
        gridColumn="2 / span 1"
        color="darkgray"
      />
      <Button
        value="9"
        gridRow="3 / span 1"
        gridColumn="3 / span 1"
        color="darkgray"
      />
    </>
  );
};

export default Numbers;
