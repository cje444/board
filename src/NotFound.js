import React from "react";
import Button from "react-bootstrap/Button";

const NotFound = (props) => {
  return (
    <>
      <h1>주소가 올바르지 않아요!</h1>
      <Button
        onClick={() => {
          props.history.goBack();
        }}
      >
        뒤로가기
      </Button>
    </>
  );
};

export default NotFound;
