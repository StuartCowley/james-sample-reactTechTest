import { React, useState } from "react";
import "../styles/app.css";
import SearchComponent from "./Search";
import SearchResults from "./SearchResults";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="App">
      <img
        className="nasa-logo"
        src="https://cdn.cdnlogo.com/logos/n/66/nasa.png"
        alt="nasalogo"
      />
      <SearchComponent setSearchResults={setSearchResults} />
      <SearchResults results={searchResults} />
    </div>
  );
};

export default App;
