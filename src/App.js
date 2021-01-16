import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from "./Header/Header.js"
import Main from "./Main/Main.js"

export default function App() {
  const [loggedInStatus, setLoggedInStatus] = useState("ログインする")

  const handleSetUser = (data) => {
    setLoggedInStatus(data.user.name)
  }

  useEffect(() => {
    checkLoginStatus()
  },[])

  const checkLoginStatus = () => {
    axios.get("http://localhost:3001/api/v1/logged_in", { withCredentials: true })
    .then(response => {
      console.log(response)
      if (response.data.logged_in) {
        setLoggedInStatus(response.data.user.name)
      } else {
        setLoggedInStatus("ログインする")
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <Container>
      <Header
        loggedInStatus={loggedInStatus}
        handleSetUser={handleSetUser}
      />
      <Main />
    </Container>
  )
}
