/* eslint-disable radix */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { Grid, Typography, Paper } from '@material-ui/core';
import {
  FaRegBookmark,
  FaBookmark,
  FaPodcast,
  FaVideo,
  FaFilePdf,
  FaCodeBranch,
  FaGraduationCap,
} from 'react-icons/fa';
import Popover from '@material-ui/core/Popover';
// import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { CardBody, useStyles } from './styles';
import api from '../../services/api';

export default props => {
  const [state, setState] = useState({
    checked: false,
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const [click, setClick] = useState(props.checked);
  const classes = useStyles();
  const open = Boolean(anchorEl);

  const handleClick = async () => {
    setClick(!click);

    const { id } = props;
    const data = {
      alunoId: parseInt(localStorage.aluno),
      matId: id,
    };

    const headers = {
      Authorization: localStorage.authToken,
    };

    const config = {
      headers: {
        Authorization: localStorage.authToken,
      },
    };
    const response = click
      ? await api.delete('/desfavoritarMaterial', { data, headers })
      : await api.post('/favoritarMaterial', data, config);
  };

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  function linkVoltar() {
    const test = window.location.href;
    localStorage.setItem('linkVoltar', test);
  }

  return (
    <Grid item lg={4} md={6} sm={12}>
      <Paper checked={props.checked} className={classes.paper} key={props.id}>
        <div className={classes.icons} onClick={handleClick}>
          {click ? (
            <FaBookmark size={24} cursor="pointer" color="#fff" />
          ) : (
            <FaRegBookmark size={24} cursor="pointer" color="#fff" />
          )}
        </div>
        <Link to={`/${props.tipo}/${props.id}`}  onClick={linkVoltar}>
          <div
            className={classes.img}
            style={{ backgroundImage: `${props.backgroundImage}` }}
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
              {props.tipo === 'podcast' ? (
                <FaPodcast className={classes.iconTipo} />
              ) : (
                ''
              )}
              {props.tipo === 'video' ? (
                <FaVideo className={classes.iconTipo} />
              ) : (
                ''
              )}
              {props.tipo === 'pdf' ? (
                <FaFilePdf className={classes.iconTipo} />
              ) : (
                ''
              )}
              {props.tipo === 'mapa' ? (
                <FaCodeBranch className={classes.iconTipo} />
              ) : (
                ''
              )}
            </span>

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
            <FaGraduationCap />
            <Typography className={classes.nomeDesciplina}>
              {props.nomeDisciplina}
            </Typography>
            {/* <Moment format="DD/MM/YYYY">{props.date}</Moment> */}
          </Typography>
          { props.visto ? <DoneAllIcon className={classes.concluido}/> : ''}
          
        </Link>
      </Paper>
    </Grid>
  );
}
