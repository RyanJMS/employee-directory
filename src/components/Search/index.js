import React, { useState, useEffect } from "react";
import "./style.css";

function Search(props) {
  const [search, setSearch] = useState("");
  const [results, setResult] = useState([]);

  const inputEvent = (event) => {
    const data = event.target.value;
    console.log(data);
    setSearch(data);
  };

  useEffect(() => {
    setResult(
      props.fighters.filter((fighter) => {
        return fighter.firstName.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, props.fighters]);
  return (
    <div>
      <h1>UFC Roster Directory</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={inputEvent}
        value={search}
      ></input>
    </div>
  );
}

export default Search;
