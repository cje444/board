import React from "react";
import Table from "react-bootstrap/Table";
import { withRouter } from "react-router-dom";

const ElTable = (props) => {
  const articles = props.articles;

  return (
    <React.Fragment>
      <Table responsive>
        <thead>
          <tr>
            <th>글번호</th>
            <th>글쓴이</th>
            <th>글제목</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr
              key={article._id}
              onClick={() => props.history.push("/article")}
            >
              <td>{article.no}</td>
              <td>{article.author}</td>
              <td>{article.title}l</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default withRouter(ElTable);
