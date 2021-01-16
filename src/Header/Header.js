import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import LoginUserModal from "./LoginUserModal";
import CreateUserModal from "./CreateUserModal";

export default function Header(props) {
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
