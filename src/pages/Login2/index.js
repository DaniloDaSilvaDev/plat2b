import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useSignUpForm from './customLogin';

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
  // botao: {
  //   marginBottom: 50,
  // },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm();

  return (
    <div className={classes.container}>
      <form
        onSubmit={handleSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <Typography
          className={classes.titulo}
          variant="h4"
          component="h4"
          gutterBottom
        >
          Login
        </Typography>
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

        <Button variant="contained" color="primary" type="submit">
          Entrar
        </Button>
      </form>
    </div>
  );
}
