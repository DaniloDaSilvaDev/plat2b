/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Typography } from '@material-ui/core';
import { useStyles, CardBody } from './styles';
// import img from '../../assets/teste1.jpg';

export default function CardDisciplina() {
  const disciplinas = [
    {
      id: 1,
      title: 'Metodologia',
      desc:
        'metodologia aplicada a pedagogia e seus componentes metodologia aplicada a pedagogia e seus componentes',
      img: require('../../assets/teste1.jpg'),
    },
    {
      id: 2,
      title: 'Currículo',
      desc:
        'metodologia aplicada a pedagogia e seus componentes metodologia aplicada a pedagogia e seus componentes metodologia aplicada a pedagogia e seus componentes metodologia aplicada a pedagogia e seus componentes metodologia aplicada a pedagogia e seus componentes',
      img: require('../../assets/teste2.jpg'),
    },
    {
      id: 3,
      title: 'Pedagogia',
      desc: 'metodologia aplicada a pedagogia e seus componentes',
      img: require('../../assets/teste3.jpg'),
    },
    {
      id: 4,
      title: 'Metodologia',
      desc: 'metodologia aplicada a pedagogia e seus componentes',
      img: require('../../assets/teste4.jpg'),
    },
    {
      id: 5,
      title: 'Psicologia pedagógica',
      desc: 'metodologia aplicada a pedagogia e seus componentes',
      img: require('../../assets/teste5.jpg'),
    },
    {
      id: 6,
      title: 'Métodos pedagógicos',
      desc: 'metodologia aplicada a pedagogia e seus componentes',
      img: require('../../assets/teste2.jpg'),
    },
  ];
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={4}>
      {disciplinas.map(d => (
        <Grid item lg={4} md={6} sm={12}>
          <Link to={`/disciplinas/${d.id}`}>
            <Paper className={classes.paper} key={d.id}>
              <CardBody>
                <div
                  className={classes.img}
                  style={{
                    background: `linear-gradient( to bottom, rgba(19, 21, 21, 0.4), rgba(19, 21, 21, 0.8) ),url(${d.img})`,
                    backgroundSize: `cover`,
                  }}
                />
                <div className={classes.caixa}>
                  <Typography
                    component="h1"
                    variant="h5"
                    className={classes.title}
                  >
                    {d.title}
                  </Typography>
                  <Typography component="p" className={classes.desc}>
                    {d.desc}
                  </Typography>
                </div>
              </CardBody>
            </Paper>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

// spacing={4} className={classes.root}
