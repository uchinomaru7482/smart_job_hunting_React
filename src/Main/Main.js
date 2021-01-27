import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import CompanyList from "./CompanyList";
import CompanyNew from "./CompanyNew";
import CompanyDetails from "./CompanyDetails";
import CompanyEdit from "./CompanyEdit";
import Lp from "./Lp";

export default function Main(props) {
  const [companys, setCompanys] = useState([]);

  useEffect(() => {
    checkCompanys()
  },[])

  const checkCompanys = () => {
    axios.get("http://localhost:3001/api/v1/companys", { withCredentials: true })
    .then(response => {
      console.log(response)
      setCompanys(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  };

  if(props.loggedInStatus) {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" render={() => <CompanyList 
            companys={companys}
          />} />
          <Route exact path="/company/new" render={() => <CompanyNew
            checkCompanys = {checkCompanys}
          />} />
          <Route exact path="/company/show/:id" render={(props) => <CompanyDetails
            checkCompanys = {checkCompanys}
            companys = {companys}
            url = {props}
          />} />
          <Route exact path="/company/edit/:id" render={(props) => <CompanyEdit
            checkCompanys = {checkCompanys}
            companys = {companys}
            url = {props}
          />} />
        </div>
      </BrowserRouter>
    )
  } else {
    return (
      <div>
        <Lp />
      </div>
    )
  }
}
