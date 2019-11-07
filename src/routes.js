import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Courses from './pages/Courses';
import VideoAula from './pages/VideoAula';
import PdfAula from './pages/PdfAula';
import Metodologia from './pages/Metodologia';

export default function Routes() {
  const RouterStyle = styled.section`
    background-color: #eaeaea;
    width: 100%;
    margin-left: 100px;
    margin-top: 70px;
    @media only screen and (max-width: 500px) {
      margin-left: 0;
    }
  `;
  return (
    <RouterStyle>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/courses" component={Courses} />
          <Route path="/metodologia" component={Metodologia} />
          <Route path="/aula" component={VideoAula} />
          <Route path="/pdf" component={PdfAula} />
        </Switch>
      </BrowserRouter>
    </RouterStyle>
  );
}
