/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  FormControlLabel,
  Paper,
  Box,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import CircularProgress from '@material-ui/core/CircularProgress';
import api from '../../services/api';
import { useStyles, GreenCheckbox, VideoBody } from './styles';
// import { Container } from './styles';

export default function VideoAula() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [aula, setAula] = useState({
    aulaId: 0,
    autorId: 0,
    cursoId: 0,
    dataCriacao: '',
    descricao: '',
    disciplinaId: 0,
    duracao: 0,
    link: '',
    moduloId: 0,
    sequencia: 0,
    thumbnail: '',
    titulo: '',
    views: 0,
  });

  useEffect(() => {
    async function resp() {
      setLoading(true);
      const test = window.location.href.split('/');
      const currentId = test[test.length - 1];
      const aulaId = {
        aulaId: currentId,
      };
      const config = {
        headers: {
          Authorization: localStorage.authToken,
        },
      };
      const responseP = await api.post('/getAula', aulaId, config);
      setAula(responseP.data.Aula);
      console.log(responseP.data.Aula);

      console.log(responseP.data.Aula.link);

      // const responseD = await api.post('/getDisciplina', dscp, config);

      // setDisciplinas(responseD.data.Disciplina.nome);
      setLoading(false);
    }
    resp();
  }, []);
  // const [stars, setStars] = useState(0);

  // useEffect(e => {
  //   setStars({ stars: e });
  // }, stars);

  const [state, setState] = useState({
    checked: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item lg={12} md={12} sm={12}>
          <Paper className={classes.paper}>
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              {loading ? (
                <div className={classes.root2}>
                  <CircularProgress />
                </div>
              ) : (
                <iframe
                  title={aula.titulo}
                  src={`https://player.vimeo.com/video/${aula.link}`}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              )}
            </div>
            <script src="https://player.vimeo.com/api/player.js%22%3E" />

            {/* <Vimeo
              video="375497879"
              autoplay
              width="100%"
              height={360}
              className={classes.video}
            /> */}

            <VideoBody>
              <Box>
                <Typography component="h1" variant="h5" className={classes.h1}>
                  {aula.titulo}
                </Typography>
              </Box>

              <Box>
                <Rating
                  // style={{ marginLeft: '600px' }}
                  value={3}
                  name="size-large"
                  // onClick={() => setStars(`value = { ${stars} }`)}
                  size="large"
                />

                <FormControlLabel
                  className={classes.check}
                  control={
                    <GreenCheckbox
                      checked={state.checked}
                      onChange={handleChange('checked')}
                      value="checked"
                    />
                  }
                  // label="Custom color"
                />
              </Box>
              <Box>
                <Typography component="p" variant="h5" className={classes.p}>
                  {aula.descricao}
                </Typography>
              </Box>
            </VideoBody>
          </Paper>
          {/* <Grid className={classes.icons} item lg={8} md={12} sm={12} /> */}
        </Grid>
      </Grid>
    </>
  );
}
