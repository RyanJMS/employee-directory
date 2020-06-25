import React, { useState, useEffect } from "react";
import "./style.css";
import Search from "../Search";
import Table from "../Table";
import fighters from "../../fighters.json";

export default function Container() {
  //let data;

  const [fighterData, setFighterData] = useState([]);

  useEffect(() => {
    setFighterData(fighters);
  }, []);

  const sortHandler = () => {
    fighterData.sort((a, b) => {
      return a.firstName.localeCompare(b.firstName);
    });
    setFighterData([...fighters]);
  };

  return (
    <div>
      <Search fighters={fighterData} />
      <Table fighters={fighterData} sortClickHandler={sortHandler} />
    </div>
  );
}
