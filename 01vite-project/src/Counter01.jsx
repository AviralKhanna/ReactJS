import { useState } from "react";
import "./App.css";

function Counter01() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      // value not above 20 points
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0)
      // no negative value.
      setCounter(counter - 1);
  };

  return (
    <>
      <h1>Hello, Project Counter through new file</h1>
      <h3>Counter Add and Removal</h3>
      <p>Current Counter Value: {counter}</p>
      <button onClick={addValue}>Increase Counter {counter}</button>
      <button onClick={removeValue}>Decrease Counter {counter}</button>
    </>
  );
}

export default Counter01;
