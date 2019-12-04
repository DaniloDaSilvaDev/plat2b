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
  if (tipo === 'pdf') {
    return 'red';
  }
  if (tipo === 'audio') {
    return 'blue';
  } else if (tipo === 'aula') {
    return 'orange';
  }
}

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function resp() {
      const disciplinaId = {};
      const config = {
        headers: {
          Authorization: localStorage.authToken,
        },
      };
      const res = await api.post('/listarTudo', disciplinaId, config);
      setPosts(res.data);
      console.log(res.data);
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
            backgroundImage={p.thumbnail}
            photoProf={p.foto}
            title={p.titulo}
            nameProf={p.profNome}
            desc={p.descricao}
            date={p.criadaEm}
            tipo={p.tipo}
            tipoColor={tipoColor(p.tipo)}
            key={p.titulo}
          />
        ))}
      </Grid>
    </Container>
  );
}
