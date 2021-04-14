import React from "react";
import Table from "react-bootstrap/Table";

const ElTable = (props) => {
  return (
    <React.Fragment>
      <Table responsive>
        <thead>
          <tr>
            <th>글번호</th>
            {Array.from({ length: 2 }).map((_, index) => (
              <th key={index}>글쓴이</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 2 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>2</td>
            {Array.from({ length: 2 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>3</td>
            {Array.from({ length: 2 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default ElTable;
