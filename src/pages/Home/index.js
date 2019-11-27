/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import Card from '../../components/Card';
import api from '../../services/api';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function resp() {
      const config = {
        headers: {
          Authorization: localStorage.authToken,
        },
      };
      const res = await api.get('/listarTudo', config);
      setPosts(res.data.Aulas);
    }
    resp();
  }, []);

  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Typography component="h1" variant="h5" className={classes.h1}>
        Olá, <span className={classes.span}>Danilo</span>
      </Typography>

      <Typography component="h2" variant="h5" className={classes.h2}>
        Vídeos recentes
      </Typography>

      <Typography component="h2" variant="h5" className={classes.h2}>
        Últimas publicações
      </Typography>

      <Grid container className={classes.root} spacing={4}>
        {posts.map(p => (
          <Card
            // backgroundImage={p.backgroundImage}
            // photoProf={p.author.photoProf}
            title={p.nome}
            // nameProf={p.author.nameProf}
            // desc={p.desc}
            date={p.criadaEm}
            // category={p.category}
            // categoryColor={p.categoryColor}
            key={p.id}
          />
        ))}
      </Grid>
    </Container>
  );
}
