import React, { useState } from 'react';

export default function Counter() {
  const [value, setValue] = useState(0);

  function handleOperation(operation) {
    if (operation === 'increment') setValue(value + 1);
    if (operation === 'decrement') {
      setValue(value - 1);
    }
  }

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => handleOperation('increment')}>Increment +</button>
      <button onClick={() => handleOperation('decrement')}>Decrement -</button>
    </div>
  );
}
