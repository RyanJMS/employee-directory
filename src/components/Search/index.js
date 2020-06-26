import React from "react";
import "./style.css";

function Search(props) {
  return (
    <div>
      <h1>UFC Roster Directory</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => props.updateSearch(event)}
        value={props.fighters}
      ></input>
    </div>
  );
}

export default Search;
