/* eslint-disable global-require */
import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { useStyles, CardBody } from './styles';

export default function CardDisciplina() {
  const disciplinas = [
    {
      id: 1,
      title: 'Metodologia',
      desc: 'metodologia aplicada a pedagogia e seus componentes',
      img: require('../../assets/teste1.jpg'),
    },
    {
      id: 2,
      title: 'Metodologia',
      desc: 'metodologia aplicada a pedagogia e seus componentes',
      img: require('../../assets/teste2.jpg'),
    },
    {
      id: 3,
      title: 'Metodologia',
      desc: 'metodologia aplicada a pedagogia e seus componentes',
      img: require('../../assets/teste2.jpg'),
    },
    {
      id: 4,
      title: 'Metodologia',
      desc: 'metodologia aplicada a pedagogia e seus componentes',
      img: require('../../assets/teste2.jpg'),
    },
    {
      id: 5,
      title: 'Metodologia',
      desc: 'metodologia aplicada a pedagogia e seus componentes',
      img: require('../../assets/teste2.jpg'),
    },
    {
      id: 6,
      title: 'Metodologia',
      desc: 'metodologia aplicada a pedagogia e seus componentes',
      img: require('../../assets/teste2.jpg'),
    },
  ];
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={4}>
      {disciplinas.map(d => (
        <Grid item lg={4} md={6} sm={12}>
          <Paper className={classes.paper} key={d.id}>
            <CardBody>
              <div
                className={classes.img}
                // style={{ backgroundImage: `url(${d.img})` }}
              >
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
        </Grid>
      ))}
    </Grid>
  );
}

// spacing={4} className={classes.root}
