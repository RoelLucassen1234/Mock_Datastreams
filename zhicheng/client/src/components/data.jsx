import React from "react";
import { Table } from "react-bootstrap";
import Searcherbar from "./searchbar";
import Pagenumber from "./pagenumber";

const Data = () => {
  const players = [
    { testid: "100", datetime: "12/11/2020 21:46", result: "negative" },
    { testid: "101", datetime: "12/11/2020 21:46", result: "negative" },
    { testid: "102", datetime: "12/11/2020 21:46", result: "negative" },
    { testid: "103", datetime: "12/11/2020 21:46", result: "negative" },
    { testid: "104", datetime: "12/11/2020 21:46", result: "negative" },
    { testid: "105", datetime: "12/11/2020 21:46", result: "negative" },
    { testid: "106", datetime: "12/11/2020 21:46", result: "negative" },
    { testid: "107", datetime: "12/11/2020 21:46", result: "negative" },
    { testid: "107", datetime: "12/11/2020 21:46", result: "negative" },
  ];

  const renderPlayer = (player, index) => {
    return (
      <tr key={index}>
        <td>{player.testid}</td>
        <td>{player.datetime}</td>
        <td>{player.result}</td>
      </tr>
    );
  };

  return (
    <div>
      <Searcherbar />
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Test Data ID</th>
              <th>Test Date Time</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>{players.map(renderPlayer)}</tbody>
        </Table>
      </div>
      <Pagenumber />
    </div>
  );
};

export default Data;
