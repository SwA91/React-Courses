import { useState } from "react";

export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handlSubtract = () => {
    setCounter((prevState) => prevState - 1);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  // preferible devolver un objeto
  return {
    // Properties/values
    counter,
    // methods/actions
    handleAdd,
    handlSubtract,
    handleReset,
  };
};
