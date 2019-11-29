/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Typography } from '@material-ui/core';
import { useStyles, CardBody } from './styles';

export default function CardDisciplina(props) {
  const classes = useStyles();
  return (
    <Grid item lg={4} md={6} sm={12}>
      <Link to={`/conteudo/${props.id}`}>
        <Paper className={classes.paper} key={props.id}>
          <CardBody>
            <div
              className={classes.img}
              style={{
                background: `linear-gradient( to bottom, rgba(19, 21, 21, 0.4), rgba(19, 21, 21, 0.8) ),url(${props.img})`,
                backgroundSize: `cover`,
              }}
            />
            <div className={classes.caixa}>
              <Typography component="h1" variant="h5" className={classes.title}>
                {props.title}
              </Typography>
              <Typography component="p" className={classes.desc}>
                {props.desc}
              </Typography>
            </div>
          </CardBody>
        </Paper>
      </Link>
    </Grid>
  );
}
