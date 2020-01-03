/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, {useState, useEffect} from 'react';
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
import Videos from '../pages/Videos';
import Podcasts from '../pages/Podcasts';
import Pdfs from '../pages/Pdfs';
import Mapas from '../pages/Mapas';
import Metodologia from '../pages/Metodologia';
import Cursos from '../pages/Cursos';
import Sidebar from '../components/Sidebar';
import Header2 from '../components/Header2';
import ProtectedRoute from './protectedRoute';

function Routes({ sideBar }) {
  const logado = localStorage.getItem('authToken');
  const cursoId = localStorage.getItem('cursoId');

  const [showSidebar] = useState(false);
  // useEffect(()=> {
  //   function handleSidebarOpen() {
  //     const { dispatch } = props;
  //     dispatch({
  //       type: 'CARREGOU_SIDEBAR',
  //       showSidebar,
  //     });
  //   }  
  // },[])
  
  const RouterStyle = styled.section`
    background-color: #eaeaea;
    width: 100%;
    // margin-left: 100px;
    margin-left: ${logado && cursoId ? '100px' : '0px'};

    /* transform: translateX(100px); */
    /* margin-top: 63.36px; */
    // margin-left: ${localStorage.cursoId ? '100px' : '0px'};
  
      margin-left: ${sideBar ? '100px' : '0px'};
  `;
  return (
    <RouterStyle>
      <BrowserRouter>
        {logado && cursoId ? (
          <>
            {' '}
            <Header2 />
            <Sidebar />{' '}
          </>
        ) : logado && cursoId === null ? (
          <>
            {' '}
            <Header2 />
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
            // {...window.location.reload()}
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
            path="/disciplina/:id"
            component={Metodologia}
            authenticated={logado !== null}
          />
          <ProtectedRoute
            path="/videos"
            component={Videos}
            authenticated={logado !== null}
          />
          <ProtectedRoute
            path="/pdfs"
            component={Pdfs}
            authenticated={logado !== null}
          />
           <ProtectedRoute
            path="/podcasts"
            component={Podcasts}
            authenticated={logado !== null}
          />
          <ProtectedRoute
            path="/mapas"
            component={Mapas}
            authenticated={logado !== null}
          />
          <ProtectedRoute
            path="/video/:id"
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
        </Switch>

        <ProtectedRoute
          path="/cursos"
          component={Cursos}
          authenticated={logado !== null}
        />

        <Route
          path="/login"
          render={props =>
            logado ? <Redirect to="/cursos" /> : <Login2 {...props} />
          }
        />
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
