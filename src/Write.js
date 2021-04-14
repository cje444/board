import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Write.css";

const Write = (props) => {
  return (
    <React.Fragment>
      <div className='write_container'>
        <Form>
          <Form.Group controlId='exampleForm.ControlInput1'>
            <Form.Control type='text' placeholder='제목을 입력하세요' />
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlInput1'>
            <Form.Control type='text' placeholder='글쓴이를 입력하세요' />
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Control
              as='textarea'
              rows={5}
              placeholder='내용을 입력하세요'
            />
          </Form.Group>
        </Form>
        <Button variant='primary'>글쓰기</Button>
      </div>
    </React.Fragment>
  );
};

export default Write;
