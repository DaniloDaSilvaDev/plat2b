/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useStyles, GreenCheckbox, BlueCheckbox, RedCheckbox } from './styles';
import Card from '../../components/Card';
import api from '../../services/api';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [state, setState] = useState({
    checkedPod: true,
    checkedPdf: true,
    checkedV: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  useEffect(() => {
    async function resp() {
      const response = await api.get('http://localhost:3333/posts');
      setPosts(response.data);
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
      const selecionados = response.filter(p => p.category === 'VIDEO');
      console.log(selecionados);

      setPosts(selecionados);
    }
    res();
  }, [filters]);

  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Typography component="h1" variant="h5" className={classes.h1}>
        Olá, <span>Danilo</span>
      </Typography>

      <Typography component="h2" variant="h5" className={classes.h2}>
        Vídeos recentes
      </Typography>

      <Typography component="h2" variant="h5" className={classes.h2}>
        Últimas publicações
      </Typography>

      <Typography component="p" variant="h5" className={classes.p}>
        filtro
      </Typography>
      <FormGroup row>
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={state.checkedV}
              onChange={
                (() => setFilters([...filters, 'VIDEO']),
                handleChange('checkedV'))
              }
              value="checkedV"
            />
          }
          label="Vídeos"
        />

        <FormControlLabel
          control={
            <BlueCheckbox
              checked={state.checkedPdf}
              onChange={
                (() => setFilters([...filters, 'PDF']),
                handleChange('checkedPdf'))
              }
              value="checkedPdf"
            />
          }
          label="PDFs"
        />

        <FormControlLabel
          control={
            <RedCheckbox
              checked={state.checkedPod}
              onChange={
                (() => setFilters([...filters, 'PODCAST']),
                handleChange('checkedPod'))
              }
              value="checkedPod"
            />
          }
          label="PodCast"
        />
      </FormGroup>

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
