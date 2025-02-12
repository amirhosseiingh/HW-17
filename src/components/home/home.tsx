import { useState, useMemo } from "react";

export default function EvenSumCalculator() {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5, 6]);
  const [newNumber, setNewNumber] = useState("");

  const evenSum = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        sum += numbers[i];
      }
    }
    return sum;
  }, [numbers]);

  const addNumber = () => {
    if (!isNaN(Number(newNumber)) && newNumber.trim() !== "") {
      setNumbers((prevNumbers) => [...prevNumbers, Number(newNumber)]);
      setNewNumber("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4">✨ Even Number Sum Calculator</h2>
        <p className="text-lg text-gray-300 mb-2">Numbers: {numbers.join(", ")}</p>
        <p className="text-green-400 text-lg font-bold">Sum of even numbers: {evenSum}</p>
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
            placeholder="Enter a number"
            className="w-full p-2 rounded-lg border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
          <button
            onClick={addNumber}
            className="bg-blue-600 hover:bg-blue-700 transition-all p-2 rounded-lg font-semibold"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
