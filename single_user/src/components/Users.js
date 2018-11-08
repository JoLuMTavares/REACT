import React, { Component } from 'react';
import Axios from 'axios';
import User from '../layouts/User';

export default class Users extends Component {
  state = {
    users: null
  };

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        this.setState({
          user: response.data
        });
      })
      .catch(error => {
        console.log('error = ' + error);
      });
  }

  nextUser = id => {
    let nextId = props.nextId;

    Axios.get('https://jsonplaceholder.typicode.com/users/' + nextId)
      .then(response => {
        this.setState({
          user: response.data
        });
      })
      .catch(error => {
        console.log('error = ' + error);
      });
  };

  /*
  // Remove user from the array using an id
  removeUserById = id => {
    const usersTemp = [...this.state.users];

    let finalUsers = usersTemp.filter(user => user.id !== id);

    this.setState({
      users: finalUsers
    });
  };
*/
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
    };

    return (
      <div className="App">
        <table className="UsersList" style={panel}>
          <thead className="titleCells" style={headersStyle}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody className="dataCells">
            {this.state.user ? (
              <User
                key={this.state.user.id}
                id={this.state.user.id}
                name={this.state.user.name}
                email={this.state.user.email}
              />
            ) : null}
          </tbody>
        </table>
      </div>
    );
  }
}
