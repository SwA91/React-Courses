import React, { useState } from "react";
// import "./ItemCounter.css";
import style from "./ItemCounter.module.css";

interface Props {
  name: string;
  quantity?: number;
  //   quantity: number | undefined;
}

export const ItemCounter = ({ name, quantity }: Props) => {
  // los hooks van al principio de la funcion
  //   const itemCounterObj = useState(10);
  // useState es a nivel local nada más
  const [count, setCount] = useState(quantity ?? 1);
  //   console.log(props);
  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSubtract = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  return (
    <section
      //   className="item-row"
      //   propiedades computadas
      className={style["item-row"]}
      //   style={{
      //     display: "flex",
      //     alignItems: "center",
      //     gap: 10,
      //     marginTop: 10,
      //   }}
    >
      <span
        className={style.itemText}
        style={{
          //   width: 150,
          color: count === 1 ? "red" : "black",
        }}
      >
        {name}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span>{count ?? 0}</span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  );
};
