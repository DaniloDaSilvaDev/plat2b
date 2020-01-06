/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect } from 'react';
import BackButton from '../../components/BackButtom'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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

function VideoAula(props) {
  const [checado] = useState(false);
  // const [click, setClick] = useState(false);
  const [value, setValue] = useState(0);
  const [state, setState] = useState({
    checked: false,
  });
  const classes = useStyles();
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

      // const responseD = await api.post('/getDisciplina', dscp, config);

      // setDisciplinas(responseD.data.Disciplina.nome);
      setLoading(false);
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

  // useEffect(() => {
  //  async function resp() {
  //     const {cursoId, matId, disciplinaId, moduloId} = aula;
  //     const aulaId = {
  //       matId,
  //       alunoId: localStorage.aluno,
  //       disciplinaId,
  //       moduloId,
  //       cursoId,
  //     };     

  //     const config = {
  //       headers: {
  //         Authorization: localStorage.authToken,
  //       },
  //     };

  //     const respCompletar = await api.post('/completarMaterial', aulaId, config)
  //     console.log(respCompletar.data);
  //     setState(respCompletar.data)
  //   }
  //   resp();
  // },[])

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
    console.log(localStorage.linkVoltar)
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

    const { dispatch } = props;
    dispatch({
      type: 'CHECKED',
      checado,
    });

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
           
              <BackButton linkVoltar={localStorage.linkVoltar}/>
            
          </Paper>
          {/* <Grid className={classes.icons} item lg={8} md={12} sm={12} /> */}
          
        </Grid>
        
      </Grid>
    </>
  );
}
export default connect()(VideoAula)