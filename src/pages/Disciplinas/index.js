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
      const cursoId = {
        cursoId: 358,
      };
      const config = {
        headers: {
          Authorization: localStorage.authToken,
        },
      };
      const response = await api.post('/listarDisciplinas', cursoId, config);
      setDisciplinas(response.data.Disciplinas);
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
            id={d.disciplinaId}
            key={d.disciplinaId}
            img={d.thumbnail}
            title={d.nome}
            desc={d.descricao}
          />
        ))}
      </Grid>
    </Container>
  );
}
