import React, { useState, useEffect } from "react";
import axios from "axios";
import Company from "./Company";
import { Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function CompanyList() {
  const [companys, setCompanys] = useState([]);
  const history = useHistory();

  useEffect(() => {
    checkCompanys()
  },[history])

  const checkCompanys = () => {
    axios.get("http://localhost:3001/api/v1/companys", { withCredentials: true })
    .then(response => {
      console.log(response)
      setCompanys(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
      <h5 className="p-3">会社一覧</h5>
      <Button onClick={() => history.push("/company/new")}>会社登録</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>会社名</th>
            <th>採用状況</th>
            <th>志望動機</th>
            <th>備考</th>
          </tr>
        </thead>

        {companys.map((data) => {
          return(
            <tbody key={ data.id }>
              <Company name={ data.name } progress={ data.progress } motivation={ data.motivation } remarks={ data.remarks } />
            </tbody>
          )
        })}
      </Table>
    </div>
  )
}
