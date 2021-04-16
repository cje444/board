import React from "react";
import Table from "react-bootstrap/Table";

const ElTable = (props) => {
  const articles = props.articles;
  console.log(articles);

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
            <tr key={article._id}>
              <td>{article.no}</td>
              <td>{article.author}</td>
              <td>{article.title}l</td>
            </tr>
          ))}

          {/* <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr> */}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default ElTable;
