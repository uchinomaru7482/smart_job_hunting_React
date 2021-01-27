import React from "react";
import { Link } from "react-router-dom";

export default function CompanyList(props) {
  return(
    <tr>
      <td><Link to={"/company/show/" + props.id }>{ props.name }</Link></td>
      <td>{ props.progress }</td>
      <td>{ props.motivation }</td>
      <td>{ props.remarks }</td>
    </tr>
  )
}
