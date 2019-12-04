/* eslint-disable radix */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import Popover from '@material-ui/core/Popover';
import Moment from 'react-moment';
import { CardBody, useStyles } from './styles';
import api from '../../services/api';

export default function(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [click, setClick] = useState(props.checked);
  const classes = useStyles();
  const open = Boolean(anchorEl);

  const handleClick = async () => {
    setClick(!click);

    const { tipo } = props;
    const data = {
      alunoId: parseInt(localStorage.aluno),
    };

    console.log(tipo);

    switch (tipo) {
      case 'Aula':
        data.aulaId = props.id;
        break;
      case 'Podcast':
        data.podcastId = props.id;
        break;

      case 'Artigo':
        data.artigoId = props.id;
        break;

      case 'Mapa':
        data.mapaId = props.id;
        break;

      default:
        break;
    }

    const headers = {
      Authorization: localStorage.authToken,
    };

    const config = {
      headers: {
        Authorization: localStorage.authToken,
      },
    };
    const response = click
      ? await api.delete(`/desfavoritar${tipo}`, { data, headers })
      : await api.post(`/favoritar${tipo}`, data, config);
  };

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    // <Grid container className={classes.root} spacing={4}>
    <Grid item lg={4} md={6} sm={12}>
      <Paper className={classes.paper} key={props.id}>
        <div
          className={classes.img}
          style={{ backgroundImage: `url(${props.backgroundImage})` }}
        >
          <div
            className={classes.author}
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <div
              className={classes.photo}
              style={{ backgroundImage: `url(${props.photoProf})` }}
            >
              <Popover
                id="mouse-over-popover"
                className={classes.popover}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography className={classes.nameTeach}>
                  Prof: {props.nameProf}
                </Typography>
              </Popover>
            </div>
          </div>
          <span
            style={{ backgroundColor: `${props.tipoColor}` }}
            className={classes.tipo}
          >
            {props.tipo}
          </span>
          <div className={classes.icons} onClick={handleClick}>
            {click ? (
              <FaBookmark size={24} cursor="pointer" color="#fff" />
            ) : (
              <FaRegBookmark size={24} cursor="pointer" color="#fff" />
            )}
          </div>
        </div>
        <CardBody>
          <Typography component="h1" variant="h5" className={classes.title}>
            {props.title}
          </Typography>
          <Typography component="p" className={classes.desc}>
            {props.desc}
          </Typography>
        </CardBody>
        <Typography component="span" className={classes.date}>
          <Moment format="DD/MM/YYYY">{props.date}</Moment>
        </Typography>
      </Paper>
    </Grid>
  );
}
