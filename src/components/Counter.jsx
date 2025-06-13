import React,{useContext} from 'react'
import CounterContext from '../context/CounterContext'
const Counter = () => {
  const {count, increment, decrement} = useContext(CounterContext);

    return (
      <>
      <div>Context Counter App</div>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </>
  )
}

export default Counter