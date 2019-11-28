import { useState } from 'react';
import api from '../../services/api';

function useSignUpForm() {
  const [inputs, setInputs] = useState({});
  // const [infosAluno] = useState({});

  const handleSubmit = async event => {
    event.preventDefault();
    const userData = {
      email: `${inputs.email}`,
      senha: `${inputs.senha}`,
    };

    const res = await api.post('/loginAluno', userData);
    // const { dispatch } = props;
    // dispatch({
    //   type: 'INFOS_USER',
    //   infosAluno,
    // });

    const aluno = res.data.alunoId;

    const authToken = `Bearer ${res.data.token}`;
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('aluno', aluno);
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
}
export default useSignUpForm;
