import { useReducer } from "react";

type State = {
  count: number;
  step: number;
};

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "setStep"; payload: number };

const initialState: State = { count: 0, step: 1 };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "reset":
      return initialState;
    case "setStep":
      return { ...state, step: action.payload };
    default:
      return state;
  }
};

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <input
        type="number"
        value={state.step}
        onChange={(e) => dispatch({ type: "setStep", payload: Number(e.target.value) })}
      />
    </div>
  );
}
