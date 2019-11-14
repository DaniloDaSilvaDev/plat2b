import React, { useState, useEffect } from 'react';
import { FaBell, FaEnvelope } from 'react-icons/fa';
import { Grid } from '@material-ui/core';
import { useStyles, Header, List, Item } from './styles';
import Profile from '../Profile';
import api from '../../services/api';

export default () => {
  // const [clicado, setClicado] = useState(0);
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    async function resp() {
      const response = await api.get('http://localhost:3333/user');
      setPhoto(response.data[0]);
    }
    resp();
  }, []);

  const classes = useStyles();
  return (
    <Header>
      <Grid container className={classes.root}>
        <List>
          <Item className="itemsMENU">
            <FaEnvelope className="fa-envelope" color="#283241" />
            <span className="notification">6</span>
          </Item>

          <Item className="itemsMENU">
            <FaBell className="fa-bell" color="#283241" />
            <span className="notification">3</span>
          </Item>

          <Item className="nameUSER itemsMENU">
            <p>Danilo Souza</p>
          </Item>

          <Profile photoPerfil={photo.photoPerfil} />
        </List>
      </Grid>
    </Header>
  );
};
