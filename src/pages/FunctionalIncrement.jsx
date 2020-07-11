import React, { useState } from 'react';

import '../App.css'; 

const FunctionalIncrement = () => {
  const [num, setNum] = useState(0);
  
  const increment = () => {
    setNum(num + 1)
  }
  
  return(
    <React.Fragment>
      <div>{num}</div>
      <span>
        <button onClick={increment} >+</button>
        <button>-</button>
      </span>
    </React.Fragment>
  )  
}

export default FunctionalIncrement;