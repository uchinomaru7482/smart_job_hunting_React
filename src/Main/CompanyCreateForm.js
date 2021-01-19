import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function CompanyCreateForm() {
  const [name, setName] = useState("");
  const [progress, setProgress] = useState(0);
  const [motivation, setMotivation] = useState("");
  const [remarks, setRemarks] = useState("");
  const history = useHistory();

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
      }
    })
    .catch(error => {
      console.log(error)
    })
    event.preventDefault()
  };

  const onClick = (event) => {
    handleCompanyCreate(event)
    setName("")
    setProgress(0)
    setMotivation("")
    setRemarks("")
    history.push("/")
  };

  return(
    <div>
      <h5 className="p-3">会社登録</h5>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>会社名</Form.Label>
          <Form.Control type="email" placeholder="株式会社" value={name} onChange={(event) => setName(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>進捗状況</Form.Label>
          <Form.Control as="select" onChange={(event) => setProgress(Number(event.target.value))}>
            <option value="0">応募検討</option>
            <option value="1">エントリー</option>
            <option value="2">一次面接</option>
            <option value="3">二次面接</option>
            <option value="4">最終面接</option>
            <option value="5">内定</option>
            <option value="6">お祈り</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>志望理由</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={(event) => setMotivation(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>備考</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={(event) => setRemarks(event.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(event) => {onClick(event)}}>
          登録
        </Button>
      </Form>
    </div>
  )
}
