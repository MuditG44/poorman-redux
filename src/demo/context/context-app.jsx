import React from 'react';
import Test from "./test";

const Comp = () => {
  return (
    <div className="App">
      <header>
        <p>This is median component, just here to import another component within it</p>
      </header>
      <Test />
    </div>
  )
}

export default Comp;