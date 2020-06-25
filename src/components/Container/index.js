import React, { useState, useEffect } from "react";
import "./style.css";
import Search from "../Search";
import Table from "../Table";
import fighters from "../../fighters.json";

export default function Container() {
  let data;
  const [search, setSearch] = useState("");
  const [fighterData, setFighterData] = useState([]);
  useEffect(() => {
    setFighterData(fighters);
  }, []);

  const sortHandler = () => {
    var filteredData = fighterData.sort((a, b) => {
      return b.firstName.localeCompare(a.firstName);
    });
    setFighterData(filteredData);
  };

  return (
    <div>
      <Search />
      <Table fighters={fighterData} sortClickHandler={sortHandler} />
    </div>
  );
}
