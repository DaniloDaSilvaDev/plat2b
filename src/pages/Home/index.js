import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
// import {
//   // GaleriaVideos,
//   // VideosLista,
//   Publicacoes,
//   PublicacoesUl
//   // VideoItem,
// } from "./style";
import Pdf from "../../components/Pdf";
// import PodeCast from "../../components/PodeCast";
// import Video from "../../components/Video";

export default props => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Typography component="h1" variant="h5" className={classes.h1}>
        Olá, <span>Danilo</span>
      </Typography>

      <Typography component="h2" variant="h5" className={classes.h2}>
        Vídeos recentets
      </Typography>

      <Typography component="h2" variant="h5" className={classes.h2}>
        Últimas publicaçõe
      </Typography>
      <Grid container spacing={6}>
        <Pdf />

        {/* <Video />
        <PodeCast />
        <Pdf /> */}
      </Grid>
    </Container>
  );
};
