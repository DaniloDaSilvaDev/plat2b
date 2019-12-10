import React from 'react';

// import { Container } from './styles';

export default function Cursos() {
  const res = await api.post('/listarCursosComprados', );
  const authToken = `Bearer ${res.data.token}`;
  localStorage.setItem('cursoId', cursoId);
  api.defaults.headers.common.Authorization = authToken;
  window.location.reload();

  return <div>CURSOS</div>;
}
