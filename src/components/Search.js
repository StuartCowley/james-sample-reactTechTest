import { React, useState } from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

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
          placeholder="Search for something in space.."
        />
        <button type="submit" className="search-button">
          <FontAwesomeIcon icon={faRocket} />
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
