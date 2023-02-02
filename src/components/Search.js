import { React, useState } from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";

const SearchComponent = ({ setSearchResults }) => {
  const [value, setValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-box"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </>
  );
};
export default SearchComponent;
