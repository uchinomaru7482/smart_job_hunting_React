import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CompanyList from "./CompanyList";
import CompanyCreateForm from "./CompanyCreateForm";
import Lp from "./Lp";

export default function Main(props) {
  if(props.loggedInStatus) {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={CompanyList} />
          <Route exact path="/company/new" component={CompanyCreateForm} />
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
