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


export default function Metodologia(props) {
  const [posts, setPosts] = useState([]);
  const [filtro, setFiltro] = useState([1, 2, 3, 4]);
  const [currentPage, setCurrentPage] = useState(1)
  const [totalCards, setTotalCards] = useState(0)
  const [disciplinas, setDisciplinas] = useState();
  const [state, setState] = useState({
    1: true,
    2: true,
    3: true,
    4: true,
  });


  function tipoColor(tipo) {
    if (tipo === 'pdf') return 'linear-gradient(165deg, rgba(3,87,0,1) 0%, rgba(23,180,5,1) 57%, rgba(44,251,6,1) 100%)';
    if (tipo === 'podcast') return 'linear-gradient(165deg, rgba(255,76,0,1) 0%, rgba(255,98,0,1) 50%, rgba(255,209,0,1) 100%)';
    if (tipo === 'video') return 'linear-gradient(165deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(0,212,255,1) 100%)';
    if (tipo === 'mapa') return 'linear-gradient(165deg, rgba(0,121,95,1) 0%, rgba(1,201,186,1) 54%, rgba(0,255,226,1) 100%)';
    return 0;
  }


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
      console.log(resFiltro.data.queryResponse);
      
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
        page: pageNumber,
        pageSize: 12,
      },
      headers,
    });
    setPosts(resFiltro.data.queryResponse);
  }

  // const paginate = pageNumber => setCurrentPage(pageNumber)
  return (
    <Container maxWidth="lg">
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
          <FormControlLabel
            control={
              <RedCheckbox
                checked={state[1]}
                onChange={handleChange(1)}
                value={1}
                name="Video"
              />
            }
            label="video"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state[3]}
                onChange={handleChange(3)}
                value="Mapa"
                name="Mapa"
              />
            }
            label="mapas"
          />

          <FormControlLabel
            control={
              <BlueCheckbox
                checked={state[2]}
                onChange={handleChange(2)}
                value={2}
                name="Pdf"
              />
            }
            label="pdf"
          />

          <FormControlLabel
            control={
              <OrangeCheckbox
                checked={state[4]}
                onChange={handleChange(4)}
                value={4}
                name="Podcast"
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
      <Pagination
        className={classes.pageBtnsBottom}
        comicsPerPage={12}
        totalComics={totalCards}
        paginate={handlePageClick}
      />
    </Container>
  );
}
