import React, { Component } from "react";
// Link is the component that allows navigating the website with router
import { Link } from "react-router-dom";
import styled from "styled-components";

const Collapse = styled.div.attrs({
  className: "collpase navbar-collapse",
})``;

const List = styled.div.attrs({
  className: "navbar-nav mr-auto",
})``;

const Item = styled.div.attrs({
  className: "collpase navbar-collapse",
})``;

class Links extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/" className="navbar-brand">
          MERN App
        </Link>
        <Collapse>
          <List>
            <Item>
              <Link to="/users/list" className="nav-link">
                List Users
              </Link>
            </Item>
            <Item>
              <Link to="/users/create" className="nav-link">
                Create User
              </Link>
            </Item>
          </List>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default Links;
