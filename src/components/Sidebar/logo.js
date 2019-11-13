/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './style';
import logoBranca from '../../assets/logo-branca.png';
// import Button from "@material-ui/core/Button";

export default () => {
  return (
    <Link to="/">
      <Logo src={logoBranca} alt="logo" />
    </Link>
  );
};
