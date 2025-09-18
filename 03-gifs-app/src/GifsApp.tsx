import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = async (query: string) => {
    query = query.trim().toLowerCase();
    if (query.length === 0) return;
    if (previousTerms.includes(query)) return;
    setPreviousTerms([query, ...previousTerms].slice(0, 6));

    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
  };
  return (
    <>
      {/* header */}
      <CustomHeader
        title="buscador de gifs"
        description="descubre y comparte gifs"
      ></CustomHeader>

      {/* search */}
      <SearchBar onQuery={handleSearch} placeholder="Busca tu GIF"></SearchBar>

      {/* busquedas previas */}
      <PreviousSearches
        onLabelClicked={handleTermClicked}
        searches={previousTerms}
      ></PreviousSearches>

      {/* Gifs */}
      <GifList gifs={gifs}></GifList>
    </>
  );
};
