import React from "react";
import axios from "axios";
import { Navbar, Nav, Button } from "react-bootstrap";
import UserLoginModal from "./UserLoginModal";
import UserCreateModal from "./UserCreateModal";

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

  function LoggedInStatusDisplay() {
    if(props.loggedInStatus) {
      return(
        <>
          <div className="d-flex align-items-center p-2">{props.user.name}</div>
          <Button variant="outline-secondary" onClick={onClick}>ログアウト</Button>
        </>
      )
    } else {
      return(
        <>
          <UserCreateModal handleSetUser={props.handleSetUser} />
          <UserLoginModal handleSetUser={props.handleSetUser} />
        </>
      )
    }
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">SMART就活</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <LoggedInStatusDisplay />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
