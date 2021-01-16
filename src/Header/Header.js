import React from "react";
import axios from "axios";
import { Navbar, Nav } from "react-bootstrap";
import LoginUserModal from "./LoginUserModal";
import CreateUserModal from "./CreateUserModal";

export default function Header(props) {
  const handleUserLogout = () => {
    axios.delete(`http://localhost:3001/api/v1/sessions/${props.user.id}`, { withCredentials: true })
    .then(response => {
      console.log(response.data)
    })
    .catch(error => console.log("ログアウトエラー", error))
  };

  const onClick = () => {
    handleUserLogout()
    props.handleRemoveUser()
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">SMART就活</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <CreateUserModal handleSetUser={props.handleSetUser} />
            <LoginUserModal handleSetUser={props.handleSetUser} />
            {props.loggedInStatus}
            <button onClick={onClick}>ログアウト</button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
