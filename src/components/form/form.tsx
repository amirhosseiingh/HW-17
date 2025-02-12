import { useState, useEffect, useRef } from "react";

export default function App() {

  const inputRef = useRef<HTMLInputElement | null>(null);

  const prevInputRef = useRef<string>("");

  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); 
    }}, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    prevInputRef.current = inputValue; 
    setInputValue(""); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">✨ useRef Example</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            ref={inputRef} 
            type="text"
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            placeholder="Type something..." 
            className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
          <button
            type="submit"
            className="bg-blue-600  hover:bg-blue-700  transition-all p-3 rounded-lg font-semibold"
          >
            Submit 
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-green-400 text-lg">
            🔵 <span>Current Input:</span> {inputValue  || "Empty"}
          </p>
          <p className="text-yellow-400 text-lg mt-2">
            🟠 <span>Previous Input: </span> { prevInputRef.current || "Empty"}
          </p>
        </div>
      </div>
    </div>
  );
}
