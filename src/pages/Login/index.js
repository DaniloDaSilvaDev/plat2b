import React from 'react';
import useSignUpForm from './CustomHooks';

// import { Container } from './styles';

export default function Login() {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm();

  // useEffect(() => {
  //   async function resp() {
  //     const userData = {
  //       email: 'tgavazza@gmail.com',
  //       senha: '02b060116',
  //     };
  //     const res = await api.post('/loginAluno', userData);
  //     const authToken = `Bearer ${res.data.token}`;
  //     localStorage.setItem('authToken', authToken);
  //     api.defaults.headers.common.Authorization = authToken;
  //   }
  //   resp();
  // }, []);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          value={inputs.email}
          required
        />
      </div>
      <div>
        <label>Senha</label>
        <input
          type="password"
          name="senha"
          onChange={handleInputChange}
          value={inputs.password1}
        />
      </div>

      <button type="submit">Entrar</button>
    </form>
  );
}
