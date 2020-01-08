/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import {
  useStyles,
} from './styles';
import Pagination from '../../components/Pagination'
import Card from '../../components/Card';
import api from '../../services/api';

function tipoColor(tipo) {
  if (tipo === 'podcast') return 'linear-gradient(165deg, rgba(255,76,0,1) 0%, rgba(255,98,0,1) 50%, rgba(255,209,0,1) 100%)';
  return 0;
}

export default function Metodologia() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [totalCards, setTotalCards] = useState(0)

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
      tipo: 4,
    }

    async function req() {
      const resFiltro = await api.post('/listarMateriais', ids, config);
      setPosts(resFiltro.data.Materiais);
      setTotalCards(resFiltro.data.total)
    }
    req();
  }, []);

  const classes = useStyles();

  async function handlePageClick(pageNumber) {
    setCurrentPage(pageNumber)

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
      tipo: 4,
    }

    const resFiltro = await api.post('/listarMateriais', ids, config);
    setPosts(resFiltro.data.Aulas);
  }

  return (
    <Container maxWidth="lg">
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
