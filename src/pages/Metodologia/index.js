/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {
  Filtro,
  useStyles,
  GreenCheckbox,
  BlueCheckbox,
  RedCheckbox,
} from './styles';

import Card from '../../components/Card';
import api from '../../services/api';

function tipoColor(tipo) {
  if (tipo === 'pdf') return 'red';
  if (tipo === 'audio') return 'blue';
  if (tipo === 'aula') return 'orange';
  return 0;
}

export default function Metodologia() {
  const [posts, setPosts] = useState([]);
  const [filtro, setFiltro] = useState(['AULAS', 'PDF', 'AUDIO']);
  const [disciplinas, setDisciplinas] = useState();
  const [state, setState] = useState({
    AUDIO: true,
    PDF: true,
    AULAS: true,
  });
  useEffect(() => {
    const link = window.location.href.split('/');
    const disciplinaId = link[link.length - 1];

    async function req() {
      const resFiltro = await api.get('/listarFiltrado', {
        params: {
          disciplinaId,
          filtro: JSON.stringify(filtro),
        },
      });
      setPosts(resFiltro.data);
    }
    req();
  }, [filtro]);

  const handleChange = name => async event => {
    event.target.checked
      ? setFiltro([...filtro, name])
      : setFiltro(filtro.filter(f => f !== name));
    setState({ ...state, [name]: event.target.checked });
  };

  useEffect(() => {
    async function resp() {
      const test = window.location.href.split('/');
      const currentId = test[test.length - 1];
      const dscp = {
        disciplinaId: currentId,
      };
      const config = {
        headers: {
          Authorization: localStorage.authToken,
        },
      };
      const responseP = await api.post('/listarTudo', dscp, config);
      setPosts(responseP.data);
      const responseD = await api.post('/getDisciplina', dscp, config);

      setDisciplinas(responseD.data.Disciplina.nome);
    }
    resp();
  }, []);

  // async function getPosts() {
  //   const response = await api.get('http://localhost:3333/posts');
  //   return response.data;
  // }

  // useEffect(() => {
  //   async function res() {
  //     const response = await getPosts();
  //     const selecionados = response.filter(p => filters.includes(p.category));
  //     setPosts(selecionados);
  //   }
  //   res();
  // }, [filters]);

  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      {/* <Typography component="h1" variant="h5" className={classes.h1}>
        Olá, <span>Danilo</span>
      </Typography>

      <Typography component="h2" variant="h5" className={classes.h2}>
        Vídeos recentes
      </Typography> */}

      <Filtro>
        <Typography component="h2" variant="h5" className={classes.h2}>
          {disciplinas}
        </Typography>
        <FormGroup
          row
          style={{
            backgroundColor: '#dcdcdc',
            padding: '10px',
            borderRadius: '8px',
            margin: '20px 0',
          }}
        >
          {/* <Typography component="p" variant="h5" className={classes.p}>
            Filtro
          </Typography> */}
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.AULAS}
                onChange={handleChange('AULAS')}
                value="AULAS"
                name="AULAS"
              />
            }
            label="vídeos"
          />

          <FormControlLabel
            control={
              <BlueCheckbox
                checked={state.PDF}
                onChange={handleChange('PDF')}
                value="PDF"
                name="PDF"
              />
            }
            label="pdf"
          />

          <FormControlLabel
            control={
              <RedCheckbox
                checked={state.AUDIO}
                onChange={handleChange('AUDIO')}
                value="AUDIO"
                name="AUDIO"
              />
            }
            label="podcast"
          />
        </FormGroup>
      </Filtro>

      <Grid container className={classes.root} spacing={4}>
        {posts.map(p => (
          <Card
            backgroundImage={p.thumbnail}
            photoProf={p.foto}
            title={p.titulo || p.nome}
            nameProf={p.profNome}
            desc={p.descricao}
            date={p.criadaEm}
            tipo={p.tipo}
            tipoColor={tipoColor(p.tipo)}
            key={p.nome}
          />
        ))}
      </Grid>
    </Container>
  );
}
