import React, { useEffect, useState } from 'react';
import '../App.css';

const Comp = () => {

  const [count, setCount] = useState(0);
  const [key, setKey] = useState(100);

  useEffect(() => {
    console.log("Component was mounted", count);
  }, [count]);
  
  useEffect(() => {
    return () => {
      console.log("Unmounted");
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>This component demostrates simple hooks like <code>useEffect</code></p>

        <p>Count is: {count}</p>
        <p>Key is: {key}</p>
        <button onClick={() => setKey(key + 1)}>Increment</button>
      </header>
    </div>
  )
}

export default Comp;