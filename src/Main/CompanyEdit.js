import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import CompanyForm from "./CompanyForm";

export default function CompanyEdit(props) {
  const [name, setName] = useState("");
  const [progress, setProgress] = useState(0);
  const [motivation, setMotivation] = useState("");
  const [remarks, setRemarks] = useState("");
  const history = useHistory();

  const onChangeName = (event) => {setName(event.target.value)}
  const onChangeProgress = (event) => {setProgress(event.target.value)}
  const onChangeMotivation = (event) => {setMotivation(event.target.value)}
  const onChangeRemarks = (event) => {setRemarks(event.target.value)}

  const id = Number(props.url.match.params.id);
  const companys = props.companys
  const company = companys.find((c) => c.id === id)

  const handleCompanyCreate = (event) => {
    axios.put(`http://localhost:3001/api/v1/companys/${id}`,
      { 
        company: {
          name: name,
          progress: progress,
          motivation: motivation,
          remarks: remarks
        }
      },
      { withCredentials: true }
    )
    .then(response => {
      if(response.data.status === "created") {
        console.log(response.data)
        props.checkCompanys()
      }
    })
    .catch(error => {
      console.log(error)
    })
    event.preventDefault()
  };

  const onClick = (event) => {
    handleCompanyCreate(event)
    history.push("/")
  };

  useEffect(() => {
    setName(company.name);
    setProgress(company.progress);
    setMotivation(company.motivation);
    setRemarks(company.remarks);
  },[company])

  return(
    <CompanyForm
      title = {"会社情報編集"}
      submit = {"更新"}
      company = {company}
      onChangeName = {onChangeName}
      onChangeProgress = {onChangeProgress}
      onChangeMotivation = {onChangeMotivation}
      onChangeRemarks = {onChangeRemarks}
      onClick = {onClick}
    />
  )
}
