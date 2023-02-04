import React from "react";
import "../styles/searchResults.css";
import PropTypes from "prop-types";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No Results</p>;
  } else {
    return (
      <div className="all-results">
        {results.map((images) => {
          return (
            <img
              className="returned-images"
              alt="Search Results"
              src={images}
            />
          );
        })}
      </div>
    );
  }
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default SearchResults;
