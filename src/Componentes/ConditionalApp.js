import React, { useState } from "react";

const ConditionalApp = () => {
  const [condition, setContidion] = useState(true);
  return (
    <>
      <h1>Contidional App</h1>
      <button onClick={() => setContidion(!condition)}>Toggle</button>
      {/* {condition ? <h2>Im a message</h2> : <h2>Other message</h2>} */}
      {/* {condition && <h2>Im a message</h2>} */}
      <h2>The value of codition is : {condition.toString()}</h2>
    </>
  );
};

export default ConditionalApp;
