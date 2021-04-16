import React from "react";
import Button from "react-bootstrap/Button";
import "./Article.css";

const Article = (props) => {
  return (
    <React.Fragment>
      <div className='detail_wrap'>
        <h3>타이틀</h3>
        <p>작가</p>
        <div className='text_area'>코멘트</div>
        <Button variant='primary'>돌아가기</Button>
      </div>
    </React.Fragment>
  );
};
export default Article;
