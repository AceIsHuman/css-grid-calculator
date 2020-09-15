import { useState } from 'react';

const useNum = initialState => {
  const [num, setNum] = useState(initialState);

  // setNumber ensures number is within bounds of calculator limit. x = STRING
  const setNumber = x => {
    if (x.length <= 12) {
      return setNum(x);
    } else {
      return setNum('ERROR');
    }
  };

  return [num, setNumber];
};

export default useNum;
