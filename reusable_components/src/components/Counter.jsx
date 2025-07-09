import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };
  const handleRest = () => {
    setCounter(0);
  };

  return (
    <>
      <div>
        counter:{counter}
        <div>
          <button onClick={handleIncrement}>increment </button>
          <button onClick={handleDecrement}>decrement </button>
          <button onClick={handleRest}>rest</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
