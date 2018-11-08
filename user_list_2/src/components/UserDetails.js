import React, { Component } from 'react';
import Axios from 'axios';
import User from '../layouts/User';

export default class Users extends Component {
  state = {
    user: null
  };

  async componentDidMount() {
    try {
      Axios.get(
        'https://jsonplaceholder.typicode.com/users/' +
          this.props.match.params.id
      ).then(response => {
        this.setState({
          user: response.data
        });
      });
    } catch (error) {
      console.log('error = ' + error);
    }
  }

  // Remove user from the array using an id
  /* removeUserById = id => {
    const usersTemp = [...this.state.users];

    let finalUsers = usersTemp.filter(user => user.id !== id);

    this.setState({
      users: finalUsers
    });
  };

  */

  render() {
    // const { user } = this.state.user;
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

    return (
      <div className="Users">
        <table className="UsersList" style={panel}>
          <thead className="titleCells">
            <tr style={headersStyle}>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Username</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody className="dataCells">
            {this.state.user ? (
              <User
                key={this.state.user.id}
                id={this.state.user.id}
                name={this.state.user.name}
                email={this.state.user.email}
                phone={this.state.user.phone}
                username={this.state.user.username}
                website={this.state.user.website}
                // removeUserHandler={this.removeUserById}
              />
            ) : null}
          </tbody>
        </table>
      </div>
    );
  }
}
