import React, { useState } from 'react';

function ExampleComponent() {
  // Desestructuración del array devuelto por useState
  const [state, setState] = useState(initialState);

  // 'state' es el valor actual del estado
  // 'setState' es una función que se utiliza para actualizar el estado

  return (
   <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}