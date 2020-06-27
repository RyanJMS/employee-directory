import React, { useState, useEffect } from "react";
import "./style.css";
import Search from "../Search";
import Table from "../Table";
import fighters from "../../fighters.json";

export default function Container() {
  //Setting state variables

  const [fighterData, setFighterData] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResult] = useState([]);

  // Populating fighterData with fighters
  useEffect(() => {
    setFighterData(fighters);
  }, []);

  //Sort Asc
  const sortHandlerAsc = () => {
    fighters.sort((a, b) => {
      return a.firstName.localeCompare(b.firstName);
    });
    setFighterData([...fighters]);
  };

  //Sort Dsc
  const sortHandlerDsc = () => {
    fighters.sort((a, b) => {
      return b.firstName.localeCompare(a.firstName);
    });
    setFighterData([...fighters]);
  };

  //Tracks user input inside of the search bar
  const updateSearch = (event) => {
    const data = event.target.value;
    console.log(data);
    setSearch(data);
  };

  // Filters out results displayed in the table live based on user input (search)
  useEffect(() => {
    setResult(
      fighterData.filter((fighter) => {
        return fighter.firstName.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, fighterData]);

  return (
    <div>
      <button
        onClick={() => {
          sortHandlerAsc();
        }}
      >
        ASC
      </button>
      <button
        onClick={() => {
          sortHandlerDsc();
        }}
      >
        DSC
      </button>
      <Search search={fighters} updateSearch={updateSearch} />
      {/* Maps filtered results to new array */}

      {results.map((fighter, index) => (
        <Table key={index} {...fighter} fighters={fighters} />
      ))}
    </div>
  );
}
