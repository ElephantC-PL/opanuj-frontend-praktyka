import React, { useState } from 'react';
import { addition, division, multiplication, subtraction } from './functions';

type CalculateFunction = (a: number, b: number) => (number | string);

const App = () => {
  const [numberA, setNumberA] = useState<string>('0');
  const [numberB, setNumberB] = useState<string>('0');
  const [result, setResult] = useState<(number | string)>(0);

  const toNumber = (argument: string): number => {
    const numberValue = Number(argument);
    return Number.isNaN(numberValue) ? 0 : numberValue;
  }

  const calculate = (action: CalculateFunction) => {   
    setResult(action(toNumber(numberA), toNumber(numberB)));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={numberA}
          onChange={(e) => setNumberA(e.target.value)}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={numberB}
          onChange={(e) => setNumberB(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => calculate(addition)}
        >
          +
        </button>
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => calculate(subtraction)}
        >
          -
        </button>
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => calculate(multiplication)}
        >
          *
        </button>
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => calculate(division)}
        >
          /
        </button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;
