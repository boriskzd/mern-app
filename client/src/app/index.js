import React from "react";
// component that shows different page by changing URL
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "../components";
// pages that will be displayed on different URLs
// example: by visiting "/users/list" router will display UsersList page
// UsersList page has to use Link from react-router-dom for this to work
import { UsersListPage, UsersInsert } from "../pages";

import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";

const Container = styled.div.attrs({
  className: "container",
})``;

function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <Switch>
          <Route path="/users/list" exact component={UsersListPage} />
          <Route path="/users/create" exact component={UsersInsert} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
