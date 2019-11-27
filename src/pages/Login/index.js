import React from 'react';
import useSignUpForm from './CustomHooks';

export default function Login() {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm();

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
