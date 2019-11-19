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
      const postData = {
        email: 'atendimento@editora2b.com.br',
        password: '2b060116',
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF0ZW5kaW1lbnRvQGVkaXRvcmEyYi5jb20uYnIiLCJwZXJtaXNzYW8iOjEsImlhdCI6MTU3NDEwMTg2NSwiaXNzIjoiaHR0cHM6Ly93d3cuMmJlZHVjYWNhby5jb20uYnIvIn0.VSpM8SnquvspdSPzpC1fjm5UW0QpGMhdQrtpmENdMywZkj9JsSkjrlY5JFNBGLnJVoLymJ2wpY7LgP8DXloszw',
        },
      };

      const aulas = await api.post('/listarAulas', postData, config);
      const pdfs = await api.get('/listarArtigos', postData, config);

      console.log(aulas.data.Aulas);
      console.log(pdfs.data.Aulas);
      setPosts(aulas.data.Aulas);

      // const [aula, pdf] = await Promise.all([
      //   api.post('/listarAulas', postData, config),
      //   api.get('/listarArtigos', postData, config),
      // ]);
      // console.log(aula);
      // console.log(pdf);

      // setPosts([...aula, ...pdf]);

      // api
      //   .all([
      //     api.post('/listarAulas', postData, config),
      //     api.post('/listarArtigos', postData, config),
      //   ])
      //   .then(
      //     api.spread(([aulaRes, pdfRes]) => {
      //       setPosts(...aulaRes, ...pdfRes);
      //     })
      //   );
    }
    //  setPosts(...aulaRes, ...pdfRes);
    resp();
  }, []);
  console.log(posts);

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
