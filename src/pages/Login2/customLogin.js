import { useState } from 'react';
import api from '../../services/api';

function useSignUpForm() {
  const [inputs, setInputs] = useState({});
  const [loginError, setLoginError] = useState();
  // const [infosAluno] = useState({});

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const userData = {
        email: `${inputs.email}`,
        senha: `${inputs.senha}`,
      };

      const res = await api.post('/loginAluno', userData);
      const aluno = res.data.alunoId;

      const authToken = `Bearer ${res.data.token}`;
      localStorage.setItem('authToken', authToken);
      localStorage.setItem('aluno', aluno);
      api.defaults.headers.common.Authorization = authToken;
      window.location.reload();
      localStorage.removeItem('error');

    } catch (error) {
     
      const err = "Credenciais inválidas";
      localStorage.setItem('error', err);
      setLoginError("Credenciais inválidas")
    }



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
    loginError,
  };
}
export default useSignUpForm;
