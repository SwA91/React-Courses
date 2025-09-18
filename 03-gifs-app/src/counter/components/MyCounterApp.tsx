import { useCounter } from "../hooks/useCounter";

export const MyCounterApp = () => {
  // ! No se puede establecer hooks condicionales
  // por el tema de posiciones en memora de las funciones
  const { counter, handlSubtract, handleAdd, handleReset } = useCounter(10);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>counter: {counter}</h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={handleAdd}>+1</button>
        <button onClick={handlSubtract}>-1</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
