import { React, useState } from "react";
import "../styles/app.css";
import SearchComponent from "./Search";

const App = () => {
  const [serchResults, setSearchResults] = useState();

  return (
    <div className="App">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasalogo"
      />
      <SearchComponent />
    </div>
  );
};

export default App;
