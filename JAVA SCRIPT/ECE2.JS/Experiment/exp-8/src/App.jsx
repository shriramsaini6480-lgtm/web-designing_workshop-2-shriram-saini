import { useState } from "react";
import "./App.css";


function App() {

  const [count, countSet] = useState(0);

  const increment = () => {
    countSet(count + 1);
  };

  const decrement = () => {
    countSet(count - 1);
  };

  const reset = () => {
    countSet(0);
  };

  return (
    <div className="container">

      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button onClick={increment}>
        Increment
      </button>

      <button onClick={decrement}>
        Decrement
      </button>

      <button onClick={reset}>
        Reset
      </button>

    </div>
  );
}

export default App;