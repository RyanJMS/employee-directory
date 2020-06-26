import React, { useState, useEffect } from "react";
import "./style.css";
import Search from "../Search";
import Table from "../Table";
import fighters from "../../fighters.json";

export default function Container() {
  const [fighterData, setFighterData] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResult] = useState([]);

  useEffect(() => {
    setFighterData(fighters);
  }, []);

  const sortHandlerAsc = () => {
    fighters.sort((a, b) => {
      return a.firstName.localeCompare(b.firstName);
    });
    setFighterData([...fighters]);
  };

  const sortHandlerDsc = () => {
    fighters.sort((a, b) => {
      return b.firstName.localeCompare(a.firstName);
    });
    setFighterData([...fighters]);
  };

  const updateSearch = (event) => {
    const data = event.target.value;
    console.log(data);
    setSearch(data);
  };

  useEffect(() => {
    setResult(
      fighters.filter((fighter) => {
        return fighter.firstName.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, fighters]);

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
      {/*sorting Buttons here,handlers should change fighterdatastate */}
      <Table fighters={fighters} />
    </div>
  );
}
