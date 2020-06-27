import React from "react";
import * as ReactBootStrap from "react-bootstrap";

//Takes props from Container
export default function Table(props) {
  //renderFighter builds the structure of the table elements
  const renderFighter = (fighter, index) => {
    return (
      <tr key={index}>
        <td>
          <img alt={fighter.firstName} src={fighter.image} />
        </td>
        <td>{fighter.firstName}</td>
        <td>{fighter.lastName}</td>
        <td>{fighter.status}</td>
      </tr>
    );
  };

  return (
    <div>
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Fighters</th>

            <th>First Name</th>

            <th>Last Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{renderFighter(props)}</tbody>
      </ReactBootStrap.Table>
    </div>
  );
}
