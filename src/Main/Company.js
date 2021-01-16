import React from "react";

export default function CompanyList(props) {
  return(
    <tr>
      <td>{ props.name }</td>
      <td>{ props.progress }</td>
      <td>{ props.motivation }</td>
      <td>{ props.remarks }</td>
    </tr>
  )
}
