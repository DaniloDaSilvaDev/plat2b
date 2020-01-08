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
import { connect } from 'react-redux';

function Home(props) {
  const [posts, setPosts] = useState([]);
  const [showSidebar, setSideBar] = useState(false);

  function tipoColor(tipo) {
    if (tipo === 'pdf') return 'linear-gradient(165deg, rgba(3,87,0,1) 0%, rgba(23,180,5,1) 57%, rgba(44,251,6,1) 100%)';
    if (tipo === 'podcast') return 'linear-gradient(165deg, rgba(255,76,0,1) 0%, rgba(255,98,0,1) 50%, rgba(255,209,0,1) 100%)';
    if (tipo === 'video') return 'linear-gradient(165deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(0,212,255,1) 100%)';
    if (tipo === 'mapa') return 'linear-gradient(165deg, rgba(0,121,95,1) 0%, rgba(1,201,186,1) 54%, rgba(0,255,226,1) 100%)';
    return 0;
  }

  useEffect(() => {  
    async function resp() {
      const infos = {
        cursoId: localStorage.cursoId,
        alunoId: localStorage.aluno,
        page: 1,
        pageSize: 12,
      };

      const config = {
        headers: {
          Authorization: localStorage.authToken,
        },
      };
      const res = await api.post('/listarTudoCurso', infos, config);
      setPosts(res.data.queryResponse);     
    }
    resp();    
  }, []);

  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <div style={{ marginTop: 50 }} />

      <Typography component="h2" variant="h5" className={classes.h2}>
        Últimas publicações
      </Typography>

      <Grid container className={classes.root} spacing={4}>
        {posts.map(p => (
          <Card
            id={p.id}
            backgroundImage={tipoColor(p.tipo)}
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
            visto={p.visto}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default connect()(Home);