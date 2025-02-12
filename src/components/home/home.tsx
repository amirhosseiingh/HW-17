import { useState, useMemo } from "react";

export default function EvenSumCalculator() {

  const [numbers, setNumbers] = useState<number[]>([1,2,3,4, 5,6]);

  const [newNumber, setNewNumber] = useState("");
  const evenSum = useMemo(() => {
  let sum = 0;

  for (let i = 0; i< numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }

  return sum;
}, [numbers]);

  
  const addNumber = () => {
    if (!isNaN(Number(newNumber))) {
      setNumbers((prevNumbers) => 
        [...prevNumbers, Number(newNumber)]);
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Even Number Sum Calculator</h2>
      <p>Numbers: {numbers}</p>
      <p>Sum of even numbers: {evenSum}</p>
      <input
        type="text"
        value={newNumber}
        onChange={(e) => setNewNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={addNumber}>Add Number</button>
    </div>
  );
}
