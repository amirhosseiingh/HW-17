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
      return { ...state,  count: state.count + state.step };
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold mb-4">Counter with useReducer</h1>
        <p className="text-3xl font-bold text-green-400 mb-4">{state.count}</p>
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() =>  dispatch({ type: "increment" })}
            className="bg-blue-600 hover:bg-blue-700 transition-all p-3 rounded-lg font-semibold"
          >
            ➕
          </button>
          <button
            onClick={() => dispatch({ type: "decrement" })}
            className="bg-red-600 hover:bg-red-700 transition-all p-3 rounded-lg font-semibold"
          >
            ➖
          </button>
          <button
            onClick={() => dispatch({ type: "reset" })}
            className="bg-gray-600 hover:bg-gray-700 transition-all p-3 rounded-lg font-semibold"
          >
            🔄
          </button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <label className="text-lg">Step:</label>
          <input
            type="number"
            value={state.step}
            onChange={(e) => dispatch({ type: "setStep", payload: Number(e.target.value) })}
            className="p-2 rounded-lg border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-center w-20"
          />
        </div>
      </div>
    </div>
  );
}
