import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
// import Sidebar from './components/Sidebar';
// import Header2 from './components/Header2';
import Routes from './routes/index';
import GlobalStyle from './styles/global';

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}
