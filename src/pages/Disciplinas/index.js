import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { useStyles } from './styles';
import CardDisciplina from '../../components/CardDisciplina';
import api from '../../services/api';

export default function Disciplinas() {
  const classes = useStyles();

  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    async function resp() {
      const response = await api.get('http://localhost:3333/disciplinas');
      setDisciplinas(response.data);
      console.log(response.data);
    }
    resp();
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography component="h1" variant="h5" className={classes.h1}>
        Disciplinas
      </Typography>
      <Grid container className={classes.root} spacing={4}>
        {disciplinas.map(d => (
          <CardDisciplina
            id={d.id}
            key={d.id}
            img={d.img}
            title={d.title}
            desc={d.desc}
          />
        ))}
      </Grid>
    </Container>
  );
}
