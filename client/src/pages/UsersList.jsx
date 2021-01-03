import React, { Component } from "react";
import ReactTable from "react-table";
import api from "../api";

// redux
import { connect } from "react-redux";
// redux end

import styled from "styled-components";
// React Table CSS file
import "react-table/react-table.css";

// few components created with "styled-components"
const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;
const Delete = styled.div`
  color: #ff0000;
  cursor: pointer;
`;

// component used for deleting users
// it asks confirmation from user to delete component
// if user confirms, it deletes the user via axios api, and reloads the page
class DeleteUser extends Component {
  deleteUser = (event) => {
    event.preventDefault();

    if (
      window.confirm(`Do you want to delete user ${this.props.id} permanently`)
    ) {
      api.deleteUserById(this.props.id);
      window.location.reload();
    }
  };

  render() {
    return <Delete onClick={this.deleteUser}>Delete User</Delete>;
  }
}

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      columns: [],
      isLoading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    // when the MongoDB returns list of all users with its data,
    // we then store users in state, from which it automatically displays all of them in React Table
    await api
      .getAllUsers()
      .then((users) => {
        this.setState({
          users: users.data.data,
          isLoading: false,
        });
      })
      .catch((e) => console.error(e));
  };

  render() {
    // when we get response with list of users, we display them in table
    //
    const { users, isLoading } = this.state;
    // console.log("TCL: UsersList -> render -> users", users.length, users);

    // React Table columns
    const columns = [
      {
        Header: "ID",
        accessor: "_id",
        filterable: true,
      },
      {
        Header: "First Name",
        accessor: "firstName",
        filterable: true,
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        filterable: true,
      },
      {
        Header: "Email",
        accessor: "email",
        filterable: true,
      },
      {
        Header: "",
        accessor: "",
        Cell: function (props) {
          return (
            <span>
              <DeleteUser id={props.original._id} />
            </span>
          );
        },
      },
    ];

    let showTable = true;
    if (!users.length) {
      showTable = false;
    }

    return (
      <Wrapper>
        <h1>List of users</h1>
        {showTable ? (
          <ReactTable
            data={users}
            columns={columns}
            loading={isLoading}
            defaultPageSize={10}
            showPagesSizeOptions={true}
            minRows={0}
          />
        ) : (
          <div>There are no users in database. Please create users.</div>
        )}
      </Wrapper>
    );
  }
}

export default UsersList;
// export default connect(mapStateToProps)(UsersList);
