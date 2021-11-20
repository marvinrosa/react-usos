import React, { useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <button onClick={incrementCounter}>Incrementar</button>
      <h3>Clicks: {counter} </h3>
    </>
  );
};

export default CounterApp;
