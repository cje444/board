import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";

const Header = ({ history }) => {
  return (
    <Jumbotron>
      <h1>게시판 만들기</h1>
      <p>아주 간단한 게시판을 만들어봅니다.</p>
      <p>
        <Button onClick={() => history.push("/write")} variant='primary'>
          글쓰기
        </Button>
      </p>
    </Jumbotron>
  );
};

export default withRouter(Header);
