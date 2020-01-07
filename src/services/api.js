import axios from 'axios';

const api = axios.create({
  baseURL: 'http://stagingplataformaapi-env.vwc8sffuj5.sa-east-1.elasticbeanstalk.com',
});

export default api;
