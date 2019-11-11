import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import Pdf from '../../components/Pdf';

export default props => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Typography component="h2" variant="h5" className={classes.h2}>
        Últimas publicações
      </Typography>
      <Grid container spacing={6}>
        <Pdf />
      </Grid>
    </Grid>
  );
};
