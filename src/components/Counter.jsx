import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter-container">
      <h2>Counter Demo</h2>
      <div className="counter-display">{count}</div>
      <div className="counter-buttons">
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  )
}

export default Counter
