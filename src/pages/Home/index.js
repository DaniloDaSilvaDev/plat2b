/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import Card from '../../components/Card';
import api from '../../services/api';

function tipoColor(tipo) {
  if (tipo === 'Artigo') return '#43B9D8';
  if (tipo === 'Podcast') return '#F58D38';
  if (tipo === 'Aula') return '#6B63ED';
  if (tipo === 'Mapa') return '#22262A';
  return 0;
}

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function resp() {
      const ids = {
        cursoId: localStorage.cursoId,
        alunoId: localStorage.aluno,
      };

      const config = {
        headers: {
          Authorization: localStorage.authToken,
        },
      };
      const res = await api.post('/listarTudoCurso', ids, config);
      setPosts(res.data.queryResponse);
      console.log(res.data.queryResponse);
    }
    resp();
  }, []);

  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <div style={{ marginTop: 50 }} />
      <Typography component="h2" variant="h5" className={classes.h2}>
        Vídeos recentes
      </Typography>

      <Typography component="h2" variant="h5" className={classes.h2}>
        Últimas publicações
      </Typography>

      <Grid container className={classes.root} spacing={4}>
        {posts.map(p => (
          <Card
            id={p.id}
            backgroundImage={p.thumbnail}
            photoProf={p.foto}
            title={p.titulo}
            nameProf={p.profNome}
            desc={p.descricao}
            date={p.criadaEm}
            tipo={p.tipo}
            tipoColor={tipoColor(p.tipo)}
            key={p.titulo}
            checked={!!p.fav}
            nomeDisciplina={p.nomeDisciplina}
          />
        ))}
      </Grid>
    </Container>
  );
}
