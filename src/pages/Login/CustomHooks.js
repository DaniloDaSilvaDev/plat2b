import { useState } from 'react';
import api from '../../services/api';
// import { Container } from './styles';

const useSignUpForm = callback => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = async event => {
    event.preventDefault();
    alert(`Usuário
      Email: ${inputs.email}
      Senha: ${inputs.senha}`);

    const userData = {
      email: `${inputs.email}`,
      senha: `${inputs.senha}`,
    };

    const res = await api.post('/loginAluno', userData);
    console.log(res);

    const authToken = `Bearer ${res.data.token}`;
    localStorage.setItem('authToken', authToken);
    api.defaults.headers.common.Authorization = authToken;
    window.location.reload();
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};
export default useSignUpForm;
