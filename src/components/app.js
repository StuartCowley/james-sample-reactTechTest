import { React, useState } from "react";
import "../styles/app.css";
import SearchComponent from "./Search";
import SearchResults from "./SearchResults";
import Pagination from "./Pagination";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  // pagination functionality
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(12);
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  //images displayed on page
  const currentImages = searchResults.slice(
    indexOfFirstImage,
    indexOfLastImage
  );
  //calculate number of pages
  const nPages = Math.ceil(searchResults.length / imagesPerPage);

  return (
    <div className="App">
      <img
        className="nasa-logo"
        src="https://cdn.cdnlogo.com/logos/n/66/nasa.png"
        alt="nasalogo"
      />
      <SearchComponent setSearchResults={setSearchResults} />
      <SearchResults results={currentImages} />
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;
