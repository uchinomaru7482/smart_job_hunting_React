import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";

export default function LoginUserModal(props) {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUserLogin = (event) => {
    axios.post("http://localhost:3001/api/v1/sessions",
      { 
        user: {
          email: email,
          password: password,
        }
      },
      { withCredentials: true }
    )
    .then(response => {
      if(response.data.logged_in) {
        props.handleSetUser(response.data)
        console.log(response.data)
      }
    })
    .catch(error => {
      console.log(error)
    })
    event.preventDefault()
  };

  const onClick = (event) => {
    handleClose()
    handleUserLogin(event)
    setEmail("")
    setPassword("")
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        ログイン
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>ユーザーログイン</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>メールアドレス</Form.Label>
              <Form.Control type="email" placeholder="taro@example.com" value={email} onChange={(event) => setEmail(event.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>パスワード</Form.Label>
              <Form.Control type="password" placeholder="********" value={password} onChange={(event) => setPassword(event.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            キャンセル
          </Button>
          <Button variant="primary" type="submit" onClick={(event) => {onClick(event)}}>
            ログイン
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
