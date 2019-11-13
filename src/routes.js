import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Disciplinas from './pages/Disciplinas';
import VideoAula from './pages/VideoAula';
import PdfAula from './pages/PdfAula';
import Metodologia from './pages/Metodologia';
import Sidebar from './components/Sidebar';

export default function Routes() {
  const RouterStyle = styled.section`
    background-color: #eaeaea;
    width: 100%;
    margin-left: 100px;
    margin-top: 63.36px;
    @media only screen and (max-width: 500px) {
      margin-left: 0;
    }
  `;
  return (
    <RouterStyle>
      <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/perfil" component={Profile} />
          <Route path="/disciplinas" exact component={Disciplinas} />
          <Route path="/disciplinas/:id" component={Metodologia} />
          <Route path="/aula/:id" component={VideoAula} />
          <Route path="/pdf/:id" component={PdfAula} />
        </Switch>
      </BrowserRouter>
    </RouterStyle>
  );
}
