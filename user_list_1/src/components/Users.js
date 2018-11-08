import React, { Component } from 'react';
import Axios from 'axios';
import User from '../layouts/User';

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
      color: 'white',
      backgroundColor: '#000'
    };

    return (
      <div className="App">
        <table className="UsersList" style={panel}>
          <thead className="titleCells">
            <tr style={headersStyle}>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="dataCells">
            {/*this.state.users
              ? this.state.users.map(user => {
                  return (
                    <User
                      key={user.id}
                      id={user.id}
                      name={user.name}
                      email={user.email}
                      removeUserHandler={this.removeUserById}
                    />
                  );
                })
              : null*/

            /* Alternative version. If the condition passes, then it goes directly to the main operation */

            this.state.users &&
              this.state.users.map(user => {
                return (
                  <User
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    removeUserHandler={this.removeUserById}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
