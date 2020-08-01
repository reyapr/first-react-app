import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { incrementAction, decrementAction } from '../redux/actions';
import '../App.css'; 

const FunctionalIncrement = () => {
  // const [num, setNum] = useState(0);
  
  const selector = useSelector(state => ({
    number: state.num
  }))
  
  const dispatch = useDispatch()
  
  const increment = () => {
    dispatch(incrementAction())
  }
  
  const decrement = () => {
    dispatch(decrementAction())
  }
  
  return(
    <React.Fragment>
      <div>{selector.number}</div>
      <span>
        <button onClick={increment} >+</button>
        <button onClick={decrement}>-</button>
      </span>
    </React.Fragment>
  )  
}

export default FunctionalIncrement;