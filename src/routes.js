import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import styled from "styled-components";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export default function Routes() {
  const RouterStyle = styled.section`
    /* background-color: #f5f6f8; */
    background-color: #eaeaea;
    width: 100%;
    margin-left: 100px;
    margin-top: 90px;
    @media only screen and (max-width: 500px) {
      margin-left: 0;
    }
  `;
  return (
    <RouterStyle>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user" component={Profile} />
        </Switch>
      </BrowserRouter>
    </RouterStyle>
  );
}
