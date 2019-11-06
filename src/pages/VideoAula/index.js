/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import { Grid, Typography, FormControlLabel, Paper } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { useStyles, GreenCheckbox } from './styles';
// import { Container } from './styles';
import videoaula from '../../assets/videos/video.mp4';

export default function VideoAula() {
  const classes = useStyles();
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
      <Grid container className={classes.root} spacing={6}>
        <Paper>
          <Grid item lg={8} md={12} sm={12}>
            <video
              // width="100%"
              min-height="100%"
              className={classes.video}
              autoPlay="false"
              preload
              controls
              // autoPlay
              // onloadstart="console.log(event.type, event)"
              // onprogress="console.log(event.type, event)"
              // onsuspend="console.log(event.type, event)"
              // onabort="console.log(event.type, event)"
              // onError="console.log(event.type, event)"
              // onemptied="console.log(event.type, event)"
              // onstalled="console.log(event.type, event)"
              // onloadedmetadata="console.log(event.type, event)"
              // onloadeddata="console.log(event.type, event)"
              // oncanplay="console.log(event.type, event)"
              // oncanplaythrough="console.log(event.type, event)"
              // onplaying="console.log(event.type, event)"
              // onwaiting="console.log(event.type, event)"
              // onseeking="console.log(event.type, event)"
              // onseeked="console.log(event.type, event)"
              // onended="console.log(event.type, event)"
              // ondurationchange="console.log(event.type, event)"
              // ontimeupdate="console.log(event.type, event)"
              // onplay="console.log(event.type, event)"
              // onpause="console.log(event.type, event)"
            >
              <source src={videoaula} type="video/mp4" />
            </video>
          </Grid>
          <Grid lg={8} md={12} sm={12} className={classes.infos}>
            <Typography component="h1" variant="h5" className={classes.h1}>
              Currículo profissional
            </Typography>

            <Rating
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
          </Grid>
        </Paper>
        {/* <Grid className={classes.icons} item lg={8} md={12} sm={12} /> */}
      </Grid>
    </>
  );
}
