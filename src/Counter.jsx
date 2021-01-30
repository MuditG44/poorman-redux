import { useStore } from "./redux";
const Counter = () => {
  const { state, dispatch } = useStore();

  return (
    <div>
      <p>Counter Component</p>

      <p>
        <button onClick={() => dispatch({type: "DEC"})}>DEC</button>
        <span>Value of counter is: {state.counter.value}</span>
        <button onClick={() => dispatch({type: "INC"})}>INC</button>
      </p>
    </div>
  )
};

export default Counter;