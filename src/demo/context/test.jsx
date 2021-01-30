import React, { useContext } from 'react';
import { DemoContext } from "./provider";

const TestComp = () => {

  const { state, setState } = useContext(DemoContext);
  return (
    <div className="App">
      <header>
        <p>This is the test component</p>
        <p>The state value is: {state}</p>
      </header>

      <button onClick={() => setState(200)}>Update the state</button>
    </div>
  )
}

export default TestComp;