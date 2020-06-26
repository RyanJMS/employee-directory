import React from "react";
import * as ReactBootStrap from "react-bootstrap";

export default function Table(props) {
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

            <th>
              First Name
              <button
                onClick={() => {
                  props.sortHandlerAsc();
                }}
                href=""
              >
                ASC
              </button>
              <button
                onClick={() => {
                  props.sortHandlerAsc();
                }}
                href=""
              >
                DSC
              </button>
            </th>

            <th>Last Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{props.fighters.map(renderFighter)}</tbody>
      </ReactBootStrap.Table>
    </div>
  );
}
