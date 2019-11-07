import React from 'react';
import { FaSearch, FaBell, FaEnvelope } from 'react-icons/fa';
import { Grid } from '@material-ui/core';
import { useStyles, Header, List, Item } from './styles';
// import photoProfile from "../../assets/eu.jpg";
import menuIcon from '../../assets/menu.png';
import Logo from '../../assets/logo_2b.png';
import Profile from '../Profile';

// import { Container } from './styles';

export default () => {
  // const [clicado, setClicado] = useState(0);
  const classes = useStyles();
  return (
    <Header>
      <Grid container className={classes.root}>
        <List>
          <Item id="logo2bItem">
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
          </Item>

          <Item className="itemsMENU">
            <FaEnvelope className="fa-envelope" />
            <span className="notification">6</span>
          </Item>

          <Item className="itemsMENU">
            <FaBell className="fa-bell" />
            <span className="notification">3</span>
          </Item>

          <Item className="nameUSER itemsMENU">
            <p>Danilo Souza</p>
          </Item>

          <Profile />

          {/* <Item className="itemsMENU">
          <img
            className="photoProfile"
            src={photoProfile}
            alt="Foto do perfil"
          />
        </Item> */}
        </List>
      </Grid>
    </Header>
  );
};
