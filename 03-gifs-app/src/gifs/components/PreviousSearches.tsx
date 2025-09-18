import type { FC } from "react";

interface Props {
  searches: string[];
  onLabelClicked: (term: string) => void;
}

export const PreviousSearches: FC<Props> = ({ searches, onLabelClicked }) => {
  return (
    <div className="previous-searches">
      <h2>busquedas previas</h2>
      <ul className="previous-searches-list">
        {searches.map((term) => (
          // no interesa mandar el evento del click
          // sino el termino de busqueda
          <li key={term} onClick={() => onLabelClicked(term)}>
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
};
