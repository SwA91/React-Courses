import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
  placeholder?: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar", onQuery }: Props) => {
  // pieza de estado solo le importa al componente del searchbar
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    onQuery(query);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleSearch();
  };

  // se ejecuta cuando se monta y desmoneta el componente
  // tiene que realizar una tarea puntual
  // crear varios efectos si es necesario
  useEffect(
    () => {
      // todo lo que hay aqui se escucha
      // console.log("hola fecto");
      // onQuery(query)
      // patron debounce para busquedas
      const timeoutid = setTimeout(() => {
        onQuery(query);
      }, 700);

      return () => {
        // limpiamos operaciones
        clearInterval(timeoutid);
      };
    },
    // lista objetos que se van a escuchar
    [query, onQuery]
  );

  return (
    <div className="search-container">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        type="text"
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
