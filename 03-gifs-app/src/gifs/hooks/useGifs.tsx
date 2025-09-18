import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";
// esta afuera para matener la informacion
// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  // ! todo esto se vuelve a ejecutar perdiendo sus estados
  // excepto los objetos de reac ej useState()ks
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  //   queda fuera del re-render
  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
    gifsCache.current[term] = gifs;
  };

  const handleSearch = async (query: string) => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;
    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].slice(0, 8));

    const gifs = await getGifsByQuery(query);
    setGifs(gifs);

    gifsCache.current[query] = gifs;
  };
  return {
    // props
    gifs,
    // methods
    handleSearch,
    handleTermClicked,
    previousTerms,
  };
};
