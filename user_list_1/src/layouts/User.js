import React, { Component } from 'react';

let User = props => {
  let buttonStyle = {
    borderRadius: '8%',
    backgroundColor: 'black',
    color: 'silver',
    width: '36px',
    height: '36px',
    boxShadow:
      '0 4px 8px 0 rgba(128, 98, 31, 0.2), 0 6px 20px 0 rgba(128, 98, 31, 0.19)',
    fontSize: '1.0em',
    margin: '2%'
  };

  let cellStyle = {
    textAlign: 'center'
  };

  let mailTo = 'mailto:' + JSON.stringify(props.email);

  return (
    <tr style={cellStyle}>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>
        <a href={mailTo}>{props.email}</a>
      </td>
      <td>
        <button
          title="Remove User"
          onClick={() => props.removeUserHandler(props.id)}
          style={buttonStyle}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default User;
