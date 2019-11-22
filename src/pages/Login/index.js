import React, { useEffect } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

export default function Login() {
  useEffect(() => {
    async function resp() {
      const userData = {
        email: 'atendimento@editora2b.com.br',
        senha: '2b060116',
      };
      const res = await api.post('/loginAluno', userData);
      const authToken = `Bearer ${res.data.token}`;
      localStorage.setItem('authToken', authToken);
      api.defaults.headers.common.Authorization = authToken;
    }
    resp();
  }, []);
  return <h1>Login</h1>;
}
