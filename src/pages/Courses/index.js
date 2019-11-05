import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { useStyles } from './styles';
import CardDisciplina from '../../components/CardDisciplina';

export default () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Typography component="h1" variant="h5" className={classes.h1}>
        Disciplinas
      </Typography>
      <Grid>
        <CardDisciplina />
      </Grid>
    </Container>
  );
};
