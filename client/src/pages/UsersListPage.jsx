import React, { Component } from "react";

import UsersList from "./UsersList";

import { connect } from "react-redux";

import { addUser, fetchUsers } from "../redux/actions";

class UsersListPage extends Component {
  componentDidMount() {
    console.log("Users List Page komponenta je mountana");
    fetchUsers();
  }

  render() {
    return (
      <div>
        <UsersList />
      </div>
    );
  }
}

// export default UsersListPage;

// TODO: delete old code
function mapStateToProps(state) {
  // WE RETURN OBJECT USERS from our store
  return {
    users: state.users,
  };
}
// HERE WE CONNECT COMPONENT WITH REDUX AND PASS THE STORE TO IT AND FUNCTIONS
export default connect(mapStateToProps, { fetchUsers })(UsersListPage);
