import React, { Component } from 'react';
import Axios from 'axios';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default class Users extends Component {
  state = {
    users: null
  };

  async componentDidMount() {
    try {
      Axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        this.setState({
          users: response.data
        });
      });
    } catch (error) {
      console.log('error = ' + error);
    }
  }

  async getUserById(id) {
    try {
      Axios.get('https://jsonplaceholder.typicode.com/users/:' + id).then(
        response => {
          this.setState({
            user: response.data
          });
        }
      );
    } catch (error) {
      console.log('error = ' + error);
    }
  }

  // Remove user from the array using an id
  removeUserById = id => {
    const usersTemp = [...this.state.users];

    let finalUsers = usersTemp.filter(user => user.id !== id);

    this.setState({
      users: finalUsers
    });
  };

  render() {
    let panel = {
      marginLeft: '20%',
      borderRadius: '3%',
      backgroundColor: 'grey',
      boxShadow:
        '0 4px 8px 0 rgba(31, 31, 31, 0.2), 0 6px 20px 0 rgba(31, 31, 31, 0.19)',
      width: '50%'
    };

    let headersStyle = {
      color: 'white'
      // backgroundColor: '#000'
    };

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

    return (
      <div className="Users">
        <table className="UsersList" style={panel}>
          <thead className="titleCells">
            <tr style={headersStyle}>
              <th>Name</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody className="dataCells">
            {this.state.users &&
              this.state.users.map(user => {
                return (
                  <tr style={cellStyle}>
                    <td>
                      <Link
                        to={'/userdetails/' + user.id}
                        title="View user details"
                      >
                        {user.name}
                      </Link>
                    </td>
                    <td>
                      <button
                        title="Remove User"
                        onClick={() => this.removeUserById(user.id)}
                        style={buttonStyle}
                      >
                        X
                      </button>{' '}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
