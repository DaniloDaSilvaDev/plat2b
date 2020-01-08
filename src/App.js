import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
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
