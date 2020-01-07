/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import api from '../../services/api';

const useStyles = makeStyles({
  root: {
    fle: 1,
    flexGrow: 1,
    fontSize: 15,
    justifyContent: 'space-between',
  },
  card: {
    maxWidth: 345,
    marginBottom: 50,
  },
  media: {
    height: 140,
  },
  h2: {
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 100,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    async function resp() {
      localStorage.removeItem('cursoId');
      const infos = {
        alunoId: localStorage.aluno,
      };

      const config = {
        headers: {
          Authorization: localStorage.authToken,
        },
      };
      const res = await api.post('/listarCursosComprados', infos, config);
      setCursos(res.data.Cursos);
    }
    resp();
    if( window.localStorage )
  {
    if( !localStorage.getItem('firstLoad') )
    {
      localStorage['firstLoad'] = true;
      window.location.reload();
    }  
    else
      localStorage.removeItem('firstLoad');
  }
  }, []);

  function handleCurso(cursoId) {
    localStorage.setItem('cursoId', cursoId);
  }

  return (
    <Container maxWidth="lg">
      <div style={{ marginTop: 50 }} />
      <Typography component="h2" variant="h5" className={classes.h2}>
        Meus Cursos
      </Typography>

      <Grid container className={classes.root} spacing={4}>
        {cursos.map(c => (
          <Link to="/">
            <Card key={c.cursoId} className={classes.card} onClick={() => handleCurso(c.cursoId)}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={c['Curso.thumbnail']}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {c['Curso.nome']}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {c['Curso.descricao']}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleCurso(c.cursoId)}
                >
                  Entrar
                </Button>
              </CardActions>
            </Card>
          </Link>
        ))}
      </Grid>
    </Container>
  );
}
