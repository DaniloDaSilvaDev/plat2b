/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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
import pdfaula from '../../assets/pdf/pdf.pdf';

export default function VideoAula(props) {
  const classes = useStyles();
  // const handleChange = name => event => {
  //   setState({ ...state, [name]: event.target.checked });
  // };
  const [value, setValue] = useState(0);
  const [state, setState] = useState({
    checked: false,
  });
  const [loading, setLoading] = useState(false);
  const [aula, setAula] = useState({
    matId: 0,
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
        matId: currentId,
        alunoId: localStorage.aluno
      };
      const config = {
        headers: {
          Authorization: localStorage.authToken,
        },
      };

      const responseP = await api.post('/getMaterial', aulaId, config);
      setAula(responseP.data.Material)
      setLoading(false);
      console.log(responseP);

    }
    resp();
  }, []);


  useEffect(() => {

    async function resp() {
      const test = window.location.href.split('/');
      const currentId = test[test.length - 1];
      const aulaId = {
        matId: currentId,
        alunoId: localStorage.aluno
      };
      const config = {
        headers: {
          Authorization: localStorage.authToken,
        },
      };

      const respStars = await api.post('/verificarNota', aulaId, config)
      setValue(respStars.data ? respStars.data.nota : 0)

    }
    resp()
  }, [value]);

  useEffect(() => {
    async function resp() {
      const test = window.location.href.split('/');
      const currentId = test[test.length - 1];
      const aulaId = {
        matId: currentId,
        alunoId: localStorage.aluno,
      };
      console.log(aula);

      const config = {
        headers: {
          Authorization: localStorage.authToken,
        },
      };

      const respMatCompletar = await api.post('/verificarMatCompleto', aulaId, config)
      setState({ checked: !!respMatCompletar.data })
    }
    resp();
  }, [])


  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    console.log(value);
  };

  const handleChangeStars = async (event, newValue) => {
    event.persist()
    const test = window.location.href.split('/');
    const currentId = test[test.length - 1];

    const aulaId = {
      matId: currentId,
      alunoId: localStorage.aluno,
      nota: newValue
    };

    const config = {
      headers: {
        Authorization: localStorage.authToken,
      },
    };
    const respStars = await api.post('/avaliarMaterial', aulaId, config)
    setValue(respStars.data.nota)
  }

  const handleClick = async () => {
    setState(!state.checked)

    const test = window.location.href.split('/');
    const currentId = test[test.length - 1];

    const { cursoId, matId, disciplinaId, moduloId } = aula;
    const data = {
      matId,
      alunoId: localStorage.aluno,
      disciplinaId,
      moduloId,
      cursoId,
    };

    console.log(data);

    const headers = {
      Authorization: localStorage.authToken,
    };

    const config = {
      headers: {
        Authorization: localStorage.authToken,
      },
    };

    const response = state.checked
      ? await api.delete('/descompletarMaterial', { data, headers })
      : await api.post('/completarMaterial', data, config);

    console.log(response);
  };


  return (
    <>
      <Grid container className={classes.root}>
        <Grid item lg={12} md={12} sm={12}>
          <Paper className={classes.paper}>
            
            <object
              data={`https://pdfs-plataforma.s3-sa-east-1.amazonaws.com/${aula.link}`}
              className={classes.dpf}
              width="100%"
              height="600"
              alt="pdf"
              toolbar="0"
            />

            <VideoBody>
              <Box>
                <Typography component="h1" variant="h5" className={classes.h1}>
                  {aula.titulo}
                </Typography>
              </Box>

              <Box>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={handleChangeStars}
                />

                <FormControlLabel
                  className={classes.check}
                  control={
                    <GreenCheckbox
                      checked={state.checked}
                      onChange={handleChange('checked')}
                      onClick={handleClick}
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
