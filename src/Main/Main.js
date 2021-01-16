import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CompanyList from "./CompanyList";
import Lp from "./Lp";

export default function Main() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={CompanyList} />
        <Route exact path="/lp"  component={Lp} />
      </div>
    </BrowserRouter>
  )
}
