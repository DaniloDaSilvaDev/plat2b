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

export default function Metodologia() {
  const [posts, setPosts] = useState([]);
  const [filters, setFilters] = useState(['aula', 'pdf', 'audio']);
  const [disciplinas, setDisciplinas] = useState();
  const [state, setState] = useState({
    audio: true,
    pdf: true,
    aula: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });

    event.target.checked
      ? setFilters([...filters, name])
      : setFilters(filters.filter(f => f !== name));
  };

  useEffect(() => {
    async function resp() {
      const responseP = await api.get('http://localhost:3333/posts');
      setPosts(responseP.data);
      const responseD = await api.get('http://localhost:3333/disciplinas');
      console.log(responseD.data);

      setDisciplinas(responseD.data[0].title);
    }
    resp();
  }, []);

  async function getPosts() {
    const response = await api.get('http://localhost:3333/posts');
    return response.data;
  }

  useEffect(() => {
    async function res() {
      const response = await getPosts();
      const selecionados = response.filter(p => filters.includes(p.category));
      setPosts(selecionados);
    }
    res();
  }, [filters]);

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
                checked={state.VIDEO}
                onChange={handleChange('aula')}
                value="aula"
              />
            }
            label="vídeos"
          />

          <FormControlLabel
            control={
              <BlueCheckbox
                checked={state.PDF}
                onChange={handleChange('pdf')}
                value="PpdfDF"
              />
            }
            label="pdf"
          />

          <FormControlLabel
            control={
              <RedCheckbox
                checked={state.PODCAST}
                onChange={handleChange('audio')}
                value="audio"
              />
            }
            label="podcast"
          />
        </FormGroup>
      </Filtro>

      <Grid container className={classes.root} spacing={4}>
        {posts.map(p => (
          <Card
            backgroundImage={p.backgroundImage}
            photoProf={p.author.photoProf}
            title={p.title}
            nameProf={p.author.nameProf}
            desc={p.desc}
            date={p.date}
            category={p.category}
            categoryColor={p.categoryColor}
            key={p.id}
          />
        ))}
      </Grid>
    </Container>
  );
}
