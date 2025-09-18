import { useRef } from "react";

export const FocusScreen = () => {
  /* 
  - variable que no dispara re-render 
  - al modificarse el input, hara que no dispare todo el re-render
  - al principio es null pero despues de crearse el input ya tenemos valor para trabajar
  */
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    console.log(inputRef.current?.value);
    // select() selecciona el texto
    // inputRef.current?.select();
    // no selecciona el texto pero pone el foco en el input
    inputRef.current?.focus();
  };

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">Focus Screen</h1>

      <input
        ref={inputRef}
        type="text"
        className="bg-white text-black px-4 py-2 rounded-md"
        autoFocus
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={handleClick}
      >
        Set focus
      </button>
    </div>
  );
};
