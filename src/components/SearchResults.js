import React from "react";
import "../styles/searchResults.css";

const SearchResults = (results) => {
  console.log(results);
  if (!results.length) {
    return <p>No Results</p>;
  } else {
    return (
      <>
        <p>Search Results</p>
        <img
          className="returned-images"
          alt="Search Results"
          src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        />
      </>
    );
  }
};

export default SearchResults;
