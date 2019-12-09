/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Disciplinas from '../pages/Disciplinas';
import VideoAula from '../pages/VideoAula';
import Login2 from '../pages/Login2';
import Favoritos from '../pages/Favoritos';
import PdfAula from '../pages/PdfAula';
import Metodologia from '../pages/Metodologia';
import Sidebar from '../components/Sidebar';
import Header2 from '../components/Header2';
import ProtectedRoute from './protectedRoute';

function Routes({ sideBar }) {
  const logado = localStorage.getItem('authToken');

  const RouterStyle = styled.section`
    background-color: #eaeaea;
    width: 100%;
    margin-left: 100px;
    margin-left: ${logado ? '100px' : '0px'};

    /* transform: translateX(100px); */
    /* margin-top: 63.36px; */
    @media only screen and (max-width: 500px) {
      margin-left: ${props => (sideBar ? '100px' : '0px')};

      /* transition-duration: 4s;
      transition-timing-function: ease-in;
      transition-property: all; */
    }
  `;
  return (
    <RouterStyle>
      <BrowserRouter>
        {logado ? (
          <>
            {' '}
            <Header2 /> <Sidebar />
          </>
        ) : (
          <></>
        )}

        <Switch>
          <ProtectedRoute
            exact
            path="/favoritos"
            component={Favoritos}
            authenticated={logado !== null}
          />
          <ProtectedRoute
            exact
            path="/"
            component={Home}
            authenticated={logado !== null}
          />
          <ProtectedRoute
            path="/disciplinas"
            component={Disciplinas}
            authenticated={logado !== null}
          />
          <ProtectedRoute
            path="/conteudo/:id"
            component={Metodologia}
            authenticated={logado !== null}
          />
          <ProtectedRoute
            path="/aula/:id"
            component={VideoAula}
            authenticated={logado !== null}
          />
          <ProtectedRoute
            path="/pdf/:id"
            component={PdfAula}
            authenticated={logado !== null}
          />
          <ProtectedRoute
            path="/perfil"
            component={Profile}
            authenticated={logado !== null}
          />
          <Route
            path="/login"
            render={props =>
              logado ? <Redirect to="/" /> : <Login2 {...props} />
            }
          />
        </Switch>
      </BrowserRouter>
    </RouterStyle>
  );
}
export default connect(state => ({
  sideBar: state.sideBar,
}))(Routes);

// logado ? (
//   <RouterStyle>
//     <BrowserRouter>
//       <Header2 />
//       <Sidebar />
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/perfil" component={Profile} />
//         <Route path="/disciplinas" exact component={Disciplinas} />
//         <Route path="/disciplinas/:id" component={Metodologia} />
//         <Route path="/aula/:id" component={VideoAula} />
//         <Route path="/pdf/:id" component={PdfAula} />
//       </Switch>
//     </BrowserRouter>
//   </RouterStyle>
// ) : (
//   <BrowserRouter>
//     <Switch>
//       {/* <Route path={<Redirect to="/login" />} component={Login} /> */}

//       <Route path="/login">{logado && <Redirect to="/" />}</Route>
//     </Switch>
//   </BrowserRouter>
// );
// }
// export default connect(state => ({
// sideBar: state.sideBar,
// }))(Routes);
