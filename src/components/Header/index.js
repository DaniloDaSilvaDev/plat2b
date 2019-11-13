import React, { useState, useEffect } from 'react';
import { FaSearch, FaBell, FaEnvelope } from 'react-icons/fa';
import { Grid } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import { useStyles, Header, List, Item } from './styles';
// import photoProfile from "../../assets/eu.jpg";
import menuIcon from '../../assets/menu.png';
import Logo from '../../assets/logo_2b.png';
import Profile from '../Profile';
import api from '../../services/api';

// import { Container } from './styles';

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
          {/* <Item id="logo2bItem">
            <img id="logo2b" src={Logo} alt="Logo" size="30px" />
          </Item>
          <Item>
            <img id="menuIcon" src={menuIcon} alt="menu" />
          </Item>

          <Item id="iconSearch" className="itemsMENU">
            <span id="fa-search">
              <FaSearch />
            </span>
            <input type="search" />
          </Item> */}

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
