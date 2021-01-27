import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function CompanyCreateForm(props) {
  const history = useHistory();
  const id = Number(props.url.match.params.id);
  const companys = props.companys
  const company = companys.find((c) => c.id === id)

  const handleCompanyDelete = (event) => {
    axios.delete(`http://localhost:3001/api/v1/companys/${id}`, { withCredentials: true })
    .then(response => {
      if(response.data.status === "deleted") {
        console.log(response.data)
        props.checkCompanys()
        history.push("/")
      }
    })
    .catch(error => {
      console.log(error)
    })
    event.preventDefault()
  };

  return(
    <div>
      <h5 className="p-3">{company.name}</h5>
      <h6>進捗状況</h6>
      <div className="border border-secondary rounded p-2 m-3">{company.progress}</div>
      <h6>志望理由</h6>
      <div className="border border-secondary rounded p-2 m-3">{company.motivation}</div>
      <h6>備考</h6>
      <div className="border border-secondary rounded p-2 m-3">{company.remarks}</div>

      <Button onClick={() => history.push(`/company/edit/${id}`)} className="mr-2">編集</Button>
      <Button onClick={(event) => handleCompanyDelete(event)}>削除</Button>
    </div>
  )
}
