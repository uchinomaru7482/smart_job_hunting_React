import React from "react";
import { Form, Button } from "react-bootstrap";

export default function CompanyForm(props) {
  return(
    <div>
      <h5 className="p-3">{props.title}</h5>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>会社名</Form.Label>
          <Form.Control type="email" placeholder="株式会社" onChange={(event) => props.onChangeName(event)} defaultValue={props.company.name} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>進捗状況</Form.Label>
          <Form.Control as="select" onChange={(event) => props.onChangeProgress(event)} defaultValue={props.company.progress}>
            <option>応募検討</option>
            <option>エントリー</option>
            <option>一次面接</option>
            <option>二次面接</option>
            <option>最終面接</option>
            <option>内定</option>
            <option>お祈り</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>志望理由</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={(event) => props.onChangeMotivation(event)} defaultValue={props.company.motivation} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>備考</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={(event) => props.onChangeRemarks(event)} defaultValue={props.company.remarks} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(event) => {props.onClick(event)}}>
          {props.submit}
        </Button>
      </Form>
    </div>
  )
}
