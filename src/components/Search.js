import { React, useState } from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";
import PropTypes from "prop-types";

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

SearchComponent.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};
export default SearchComponent;
