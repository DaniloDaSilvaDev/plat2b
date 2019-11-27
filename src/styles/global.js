import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;

  }

  html, body, #root {
    min-height: 100%;

  }

  #root {
      display: flex;
  }

  body {
    background: #fff;
    -webkit-font-smoothing: antialiased !important;
    height: 100vh;

  }
  body, input, button {
    color: #222;
    font-size: 11px;

  }

  button {
    cursor: pointer;
  }

  .page {
      padding: 20px;
  }
`;
