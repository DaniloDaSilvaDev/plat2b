import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import Pdf from "../../components/Pdf";

export default props => {
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
      <Grid container spacing={6}>
        <Pdf />
      </Grid>
    </Container>
  );
};
