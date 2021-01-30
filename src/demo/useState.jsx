import React, { useState } from 'react';
import '../App.css';

const useReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}

const reducer = (state, action) => {
  switch(action.type) {
    case "INC": {
      return { ...state, counter: state.counter + 1 };
    }
    case "NAME": {
      return { ...state, name: action.v };
    }
    case "EMAIL": {
      return { ...state, email: action.v };
    }
  }
}

const Comp = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "Manoj",
    email: "manoj@ttn.com",
    counter: 0
  });

  console.log(state);
  return (
    <div className="App">
      <header className="App-header">
        <p>This component demostrates simple hooks like <code>useState</code></p>

        <p>Name: {state.name}</p>
        <p>Email: {state.email}</p>
        <p>Counter: {state.counter}</p>

        <button onClick={() => dispatch({type: "NAME", v: "Akash"})}>Update Name</button>
        <button onClick={() => dispatch({type: "EMAIL", v: "akash@ttn.com"})}>Update Email</button>
        <button onClick={() => dispatch({type: "INC"})}>Increment</button>
      </header>
    </div>
  )
}

export default Comp;