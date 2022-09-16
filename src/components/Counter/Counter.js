import React, { useState } from 'react'

const Counter = () => {

    const[counter, setCounter]=useState(0)

    const handleIncrement=()=>{
        setCounter(counter+1)
    }

    const handleDecrement=()=>{
        setCounter(counter-1)
    }

  return (
    <div>
        <h3>Counter Example</h3>
        <p data-testId="counterValue">{counter}</p>

        <button data-testid="incrementBtn" onClick={handleIncrement}>+</button>
        <button data-testId="decrementBtn" onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter