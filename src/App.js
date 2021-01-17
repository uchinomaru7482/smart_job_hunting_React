import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from "./Header/Header.js"
import Main from "./Main/Main.js"

export default function App() {
  const [loggedInStatus, setLoggedInStatus] = useState(false)
  const [user, setUser] = useState({})

  const handleSetUser = (data) => {
    setLoggedInStatus(true)
    setUser(data.user)
  };

  const handleRemoveUser = () => {
    setLoggedInStatus(false)
    setUser({})
  };

  useEffect(() => {
    checkLoginStatus()
  },[])

  const checkLoginStatus = () => {
    axios.get("http://localhost:3001/api/v1/logged_in", { withCredentials: true })
    .then(response => {
      console.log(response)
      if (response.data.logged_in) {
        setLoggedInStatus(true)
        setUser(response.data.user)
      } else {
        setLoggedInStatus(false)
      }
    })
    .catch(error => {
      console.log(error)
    })
  };

  return (
    <Container>
      <Header
        loggedInStatus={loggedInStatus}
        user={user}
        handleSetUser={handleSetUser}
        handleRemoveUser={handleRemoveUser}
      />
      <Main
        loggedInStatus={loggedInStatus}
      />
    </Container>
  )
}
