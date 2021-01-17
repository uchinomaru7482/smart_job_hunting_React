import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";

export default function UserCreateModal(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUserRegistration = (event) => {
    axios.post("http://localhost:3001/api/v1/users",
      { 
        user: {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation
        }
      },
      { withCredentials: true }
    )
    .then(response => {
      if(response.data.status === "created") {
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
    handleUserRegistration(event)
    setName("")
    setEmail("")
    setPassword("")
    setPasswordConfirmation("")
  };

  return (
    <div className="pr-2">
      <Button variant="primary" onClick={handleShow}>
        新規登録
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>新規ユーザー登録</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>ニックネーム</Form.Label>
              <Form.Control type="name" placeholder="佐藤 太郎" value={name} onChange={(event) => setName(event.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>メールアドレス</Form.Label>
              <Form.Control type="email" placeholder="taro@example.com" value={email} onChange={(event) => setEmail(event.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>パスワード</Form.Label>
              <Form.Control type="password" placeholder="********" value={password} onChange={(event) => setPassword(event.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>パスワード確認</Form.Label>
              <Form.Control type="password" placeholder="********" value={passwordConfirmation} onChange={(event) => setPasswordConfirmation(event.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            キャンセル
          </Button>
          <Button variant="primary" type="submit" onClick={(event) => {onClick(event)}}>
            登録
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
