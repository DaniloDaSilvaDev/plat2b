/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {

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
  if (tipo === 'Artigo') return 'rgb(59, 155, 47)';
  if (tipo === 'Podcast') return '#F58D38';
  if (tipo === 'Aula') return '#6B63ED';
  if (tipo === 'Mapa') return 'rgb(20, 159, 251)';
  return 0;
}


export default function Metodologia() {
  const [posts, setPosts] = useState([]);
  // const [filtro, setFiltro] = useState(['AULA', 'ARTIGO', 'AUDIO', 'MAPA']);
  const [currentPage, setCurrentPage] = useState(1)
  const [totalCards, setTotalCards] = useState(0)
  // const [disciplinas, setDisciplinas] = useState();
  // const [state, setState] = useState({
  //   AUDIO: true,
  //   ARTIGO: true,
  //   AULA: true,
  //   MAPA: true,
  // });
  useEffect(() => {
    const config = {
      headers: {
        Authorization: localStorage.authToken,
      }
    }
    const ids = {
      cursoId: localStorage.cursoId,
      alunoId: localStorage.aluno,
      page: currentPage,
      pageSize: 12,
      tipo: 3,
    }

    async function req() {
      const resFiltro = await api.post('/listarMateriais', ids, config);
      setPosts(resFiltro.data.Materiais);
      console.log(resFiltro.data);
      setTotalCards(resFiltro.data.total)
      console.log(resFiltro.data.total);

    }
    req();
  }, []);

  // const handleChange = name => async event => {
  //   event.target.checked
  //     ? setFiltro([...filtro, name])
  //     : setFiltro(filtro.filter(f => f !== name));
  //   setState({ ...state, [name]: event.target.checked });
  // };
  const classes = useStyles();

  async function handlePageClick(pageNumber) {
    setCurrentPage(pageNumber)
    console.log(pageNumber);

    // const link = window.location.href.split('/');
    // const disciplinaId = link[link.length - 1];
    const config = {
      headers: {
        Authorization: localStorage.authToken,
      }
    }
    const ids = {
      alunoId: localStorage.aluno,
      cursoId: localStorage.cursoId,
      page: pageNumber,
      pageSize: 12,
      tipo: 3,
    }

    const resFiltro = await api.post('/listarMateriais', ids, config);
    setPosts(resFiltro.data.Aulas);
    console.log(posts);
  }

  // const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <Container maxWidth="lg">
      {/* <Typography component="h1" variant="h5" className={classes.h1}>
        Olá, <span>Danilo</span>
      </Typography>

      <Typography component="h2" variant="h5" className={classes.h2}>
        Vídeos recentes
      </Typography> */}

      {/* <Filtro>
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
      {/* <FormControlLabel
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
      </Filtro> */}
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
            visto={p.visto}
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
