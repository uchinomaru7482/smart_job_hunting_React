import React from "react";
import Company from "./Company";
import { Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function CompanyList(props) {
  const history = useHistory();

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

        {props.companys.map((data) => {
          return(
            <tbody key={ data.id }>
              <Company id={data.id} name={ data.name } progress={ data.progress } motivation={ data.motivation } remarks={ data.remarks } />
            </tbody>
          )
        })}
      </Table>
    </div>
  )
}
