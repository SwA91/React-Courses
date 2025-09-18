import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { handleSearch, handleTermClicked, previousTerms, gifs } = useGifs();

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
