import React, { Component } from 'react';

let User = props => {
  let mailTo = 'mailto:' + JSON.stringify(props.email);

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>
        <a href={mailTo}>{props.email}</a>
      </td>
    </tr>
  );
};

export default User;
