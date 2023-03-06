import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Table from './table';

const App: React.FC = () => {
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
      .then(response => response.json())
      .then(data => {
        if (data.drinks != null && data.drinks.length > 0) {
          setResults(data.drinks)
        } else {
          setResults([]);
        }
      }
      );
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {(results.length > 0) ? <Table results={results} ></Table> : ''}
    </div>
  );
};

export default App;
