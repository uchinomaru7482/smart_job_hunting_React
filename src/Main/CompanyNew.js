import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import CompanyForm from "./CompanyForm";

export default function CompanyNew(props) {
  const [name, setName] = useState("");
  const [progress, setProgress] = useState(0);
  const [motivation, setMotivation] = useState("");
  const [remarks, setRemarks] = useState("");
  const history = useHistory();
  const company = [name, progress, motivation, remarks]

  const onChangeName = (event) => {setName(event.target.value)}
  const onChangeProgress = (event) => {setProgress(event.target.value)}
  const onChangeMotivation = (event) => {setMotivation(event.target.value)}
  const onChangeRemarks = (event) => {setRemarks(event.target.value)}

  const handleCompanyCreate = (event) => {
    axios.post("http://localhost:3001/api/v1/companys",
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

  return(
    <CompanyForm
      title = {"会社登録"}
      submit = {"登録"}
      company = {company}
      onChangeName = {onChangeName}
      onChangeProgress = {onChangeProgress}
      onChangeMotivation = {onChangeMotivation}
      onChangeRemarks = {onChangeRemarks}
      onClick = {onClick}
    />
  )
}
