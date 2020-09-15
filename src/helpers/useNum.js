import { useState } from 'react';

const useNum = initialState => {
  const [num, setNum] = useState(initialState);

  // setNumber ensures number is within bounds of calculator limit. x = STRING
  const setNumber = x => {
    if (x.length <= 12) {
      return setNum(x);
    } else {
      let isAcceptableFloat = false;
      let modifiedFloat = '';
      for (let i = 0; i < 12; i++) {
        if (x[i] === '.') {
          isAcceptableFloat = true;
        }
        modifiedFloat += x[i];
      }
      return isAcceptableFloat ? setNum(modifiedFloat) : setNum('ERROR');
    }
  };

  return [num, setNumber];
};

export default useNum;
