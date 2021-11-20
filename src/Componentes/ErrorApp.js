import React, { useState } from "react";

const ErrorApp = () => {
  const [error, setError] = useState("");
  return (
    <>
      <h1>Error App</h1>
      <button onClick={() => setError("Error fetching values from API")}>
        Error
      </button>
      <button onClick={() => setError("Error on render application")}>
        Another Error
      </button>
      <button onClick={() => setError("")}>Success Process</button>
      {error && <h2>{error}</h2>}
    </>
  );
};

export default ErrorApp;
