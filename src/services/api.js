import axios from 'axios';

const api = axios.create({
  baseURL: 'https://plataforma-api-2b-staging.herokuapp.com',
});

export default api;
