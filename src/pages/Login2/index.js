import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import ButtColorButtonon from '@material-ui/core/Button';
// import { connect } from 'react-redux';
import useSignUpForm from './customLogin';

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText('#609F54'),
    backgroundColor: '#609F54',
    '&:hover': {
      backgroundColor: '#479637',
    },
  },
}))(Button);

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 50,
      marginBottom: 0,
      display: 'flex',
      flexDirection: 'column',
    },
  },
  container: {
    width: 600,
    margin: '50px auto',
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: '30px 0',
    '@media only screen and (max-width: 700px)': {
      width: '80%',
      margin: '50px auto'
    },
  },
  titulo: {
    color: '#464646',
    textAlign: 'center',
  },
  inputNome: {
    width: '100%',
  },
  inputSenha: {
    width: '100%',
    marginBottom: 50,
  },
  containerSenha: {
    width: '70%',
  },
  containerNome: {
    width: '70%',
  },
  msgError: {
    color: 'red',
    margin: '0 auto',
    textAlign: 'center',
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const { loginError, inputs, handleInputChange, handleSubmit } = useSignUpForm();


  return (
    <div className={classes.container}>
      <form
        onSubmit={handleSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <img
          src="https://www.2beducacao.com.br/editter/assets/img/2b-educacao.png"
          alt="Logo 2b"
        />
        <div className={classes.containerNome}>
          <TextField
            id="standard-basic"
            label="Email"
            type="email"
            name="email"
            onChange={handleInputChange}
            value={inputs.email}
            required
            className={classes.inputNome}
          />
        </div>

        <div className={classes.containerSenha}>
          <TextField
            id="standard-basic"
            label="Senha"
            type="password"
            name="senha"
            onChange={handleInputChange}
            value={inputs.password1}
            required
            className={classes.inputSenha}
          />
        </div>
        {loginError && <h1  className={classes.msgError}>{loginError}</h1>}

        <ColorButton variant="contained" color="primary" type="submit">
          Entrar
        </ColorButton>
      </form>
    </div>
  );
}
