import React, { Component } from "react";
import api from "../api";

import styled from "styled-components";

// few components created with "styled-components"
const Title = styled.h1.attrs({
  className: "h1",
})``;

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: 0 30px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
`;

class UsersInsert extends Component {
  // by default, all input fields are empty
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };
  }

  // by entering info about user, we store data in state
  handleChangeInputFirstName = async (event) => {
    const firstName = event.target.value;
    this.setState({ firstName });
  };

  handleChangeInputLastName = async (event) => {
    const lastName = event.target.value;
    this.setState({ lastName });
  };

  handleChangeInputEmail = async (event) => {
    const email = event.target.value;
    this.setState({ email });
  };

  handleIncludeUser = async () => {
    const { firstName, lastName, email } = this.state;
    const payload = { firstName, lastName, email };
    // payload is sent to insert user api, and all input fields are cleared
    await api.insertUser(payload).then((res) => {
      window.alert(`User inserted successfully`);
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
      });
    });
  };

  render() {
    const { firstName, lastName, email } = this.state;

    return (
      <div>
        <Wrapper>
          <Title>Create User</Title>
          <Label>First Name: </Label>
          <InputText
            type="text"
            value={firstName}
            onChange={this.handleChangeInputFirstName}
          />
          <Label>Last Name: </Label>
          <InputText
            type="text"
            value={lastName}
            onChange={this.handleChangeInputLastName}
          />
          <Label>Email: </Label>
          <InputText
            type="text"
            value={email}
            onChange={this.handleChangeInputEmail}
          />
          <Button onClick={this.handleIncludeUser}>Add User</Button>
          <CancelButton href={"/users/list"}>Cancel</CancelButton>
        </Wrapper>
      </div>
    );
  }
}

export default UsersInsert;
