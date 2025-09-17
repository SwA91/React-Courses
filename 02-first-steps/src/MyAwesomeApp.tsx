import type { CSSProperties } from "react";

const firstName = "Pepe";
const lastName = "Fernandez";
const array = [1, 2, 3, 4];
const isActive = true;
const myobj = {
  pepe: "juan",
};
// protip para tener las propiedades del CSS
const myStyles: CSSProperties = {
  backgroundColor: "red",
  borderRadius: 10,
  padding: isActive ? 10 : 5,
};
export function MyAwesomeApp() {
  // las constantes mejor dejarlas fuera
  // porque las funciones son llamadas constantementes
  // esto no es HTML sino JSX
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>
      <p>{array.join(",")}</p>
      <p>{2 + 2}</p>
      <h1>{isActive ? "activo" : "desactivado"}</h1>
      <p style={myStyles}>{JSON.stringify(myobj)}</p>
    </>
  );
}
