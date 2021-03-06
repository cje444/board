import React from "react";
import Button from "react-bootstrap/Button";
import "./Article.css";

const Article = (props) => {
  const article = props.articles;
  console.log(props.articles);
  return (
    <React.Fragment>
      <div className='detail_wrap'>
        <h3>{article.title}</h3>
        <p>작가</p>
        <div className='text_area'>코멘트</div>
        <Button variant='primary'>돌아가기</Button>
      </div>
    </React.Fragment>
  );
};
export default Article;
