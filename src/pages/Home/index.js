/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import Pdf from '../../components/Pdf';
import api from '../../services/api';

export default class Home extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const response = await api.get('http://localhost:3333/posts');
    this.setState({ posts: response.data });
  }
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  // const response = api.get('http://www.mocky.io/v2/5dc9b6662f0000fec373eea6');
  // setPosts(response.posts);
  // sconsole.log(response);
  // }, []);

  render() {
    // const classes = useStyles();
    return (
      <Container maxWidth="lg">
        <Typography component="h1" variant="h5">
          Olá, <span>Danilo</span>
        </Typography>

        <Typography component="h2" variant="h5">
          Vídeos recentes
        </Typography>

        <Typography component="h2" variant="h5">
          Últimas publicações
        </Typography>
        <Grid container spacing={6}>
          {this.state.posts.map(p => (
            <Pdf props={p} />
          ))}
        </Grid>
      </Container>
    );
  }
}
