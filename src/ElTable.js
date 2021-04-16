import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as articleActions } from "./redux/modules/article";

const ElTable = (props) => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.article.articles);

  console.log(articles);

  // React.useEffect(() => {
  //   articleActions.then(function (result) {
  //     dispatch(result);
  //   });
  // }, []);

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
            {articles.map((a, index) => {
              return (
                <td key={a.id} {...a}>
                  Table cell {index}
                </td>
              );
            })}
          </tr>
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default ElTable;
