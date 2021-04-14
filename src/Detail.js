import React from "react";
import Button from "react-bootstrap/Button";
import "./Detail.css";

const Detail = (props) => {
  return (
    <React.Fragment>
      <div className='detail_wrap'>
        <h3>Title</h3>
        <p>Author</p>
        <div className='text_area'>
          죽는 날까지 하늘을 우러러 한 점 부끄럼이 없기를, 잎새에 이는 바람에도
          나는 괴로워했다. 별을 노래하는 마음으로 모든 죽어 가는 것을 사랑해야지
          그리고 나한테 주어진 길을 걸어가야겠다. 오늘 밤에도 별이 바람에
          스치운다.
        </div>
        <Button variant='primary'>돌아가기</Button>
      </div>
    </React.Fragment>
  );
};
export default Detail;
