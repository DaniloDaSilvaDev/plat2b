import React from 'react';

// import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Routes from './routes';
import GlobalStyle from './styles/global';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      {/* <Sidebar /> */}
      <Routes />
    </>
  );
}
