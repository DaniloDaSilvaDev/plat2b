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
  OrangeCheckbox,
  RedCheckbox,
} from './styles';
import Pagination from '../../components/Pagination'
import Card from '../../components/Card';
import api from '../../services/api';

function tipoColor(tipo) {
  if (tipo === 'Artigo') return '#43B9D8';
  if (tipo === 'Podcast') return '#F58D38';
  if (tipo === 'Aula') return '#6B63ED';
  if (tipo === 'Mapa') return '#22262A';
  return 0;
}

export default function Metodologia() {
  const [posts, setPosts] = useState([]);
  const [filtro, setFiltro] = useState(['AULA', 'ARTIGO', 'AUDIO', 'MAPA']);
  const [currentPage, setCurrentPage] = useState(1)
  const [totalCards, setTotalCards] = useState(0)
  const [disciplinas, setDisciplinas] = useState();
  const [state, setState] = useState({
    AUDIO: true,
    ARTIGO: true,
    AULA: true,
    MAPA: true,
  });
  useEffect(() => {
    const link = window.location.href.split('/');
    const disciplinaId = link[link.length - 1];
    const headers = {
      Authorization: localStorage.authToken,
    };

    async function req() {
      const resFiltro = await api.get('/listarFiltrado', {
        params: {
          disciplinaId,
          filtro: JSON.stringify(filtro),
          alunoId: localStorage.aluno,
          page: currentPage,
          pageSize: 12,
        },
        headers,
      });
      setPosts(resFiltro.data.queryResponse);
      setTotalCards(resFiltro.data.total)
    }
    req();
  }, [filtro]);

  const handleChange = name => async event => {
    event.target.checked
      ? setFiltro([...filtro, name])
      : setFiltro(filtro.filter(f => f !== name));
    setState({ ...state, [name]: event.target.checked });
  };

  // useEffect(() => {
  //   async function resp() {
  //     const test = window.location.href.split('/');
  //     const currentId = test[test.length - 1];
  //     const dscp = {
  //       disciplinaId: currentId,
  //       alunoId: localStorage.aluno,
  //       page: currentPage,
  //       pageSize: 12,
  //     };
  //     const config = {
  //       headers: {
  //         Authorization: localStorage.authToken,
  //       },
  //     };
  //     const responseP = await api.post('/listarTudoDisciplina', dscp, config);
  //     console.log(responseP.data);
  //     setPosts(responseP.data);

  //     const responseD = await api.post('/getDisciplina', dscp, config);

  //     setDisciplinas(responseD.data.Disciplina.nome);
  //   }
  //   resp();
  // }, []);

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

  async function handlePageClick(pageNumber) {
    setCurrentPage(pageNumber)
    const link = window.location.href.split('/');
    const disciplinaId = link[link.length - 1];
    const headers = {
      Authorization: localStorage.authToken,
    };
    const resFiltro = await api.get('/listarFiltrado', {
      params: {
        disciplinaId,
        filtro: JSON.stringify(filtro),
        alunoId: localStorage.aluno,
        page: currentPage,
        pageSize: 12,
      },
      headers,
    });
    setPosts(resFiltro.data.queryResponse);
    console.log(pageNumber);
    console.log(resFiltro.data.queryResponse);
    
    
  }

  handlePageClick();
  // const paginate = pageNumber => setCurrentPage(pageNumber)

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
              <RedCheckbox
                checked={state.AULA}
                onChange={handleChange('AULA')}
                value="AULA"
                name="AULA"
              />
            }
            label="Aulas"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.MAPA}
                onChange={handleChange('MAPA')}
                value="MAPA"
                name="MAPA"
              />
            }
            label="Mapas"
          />

          <FormControlLabel
            control={
              <BlueCheckbox
                checked={state.ARTIGO}
                onChange={handleChange('ARTIGO')}
                value="ARTIGO"
                name="ARTIGO"
              />
            }
            label="Artigos"
          />

          <FormControlLabel
            control={
              <OrangeCheckbox
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
      <Pagination
        className={classes.pageBtnsBottom}
        comicsPerPage={12}
        totalComics={totalCards}
        paginate={handlePageClick}
      />
    </Container>
  );
}
