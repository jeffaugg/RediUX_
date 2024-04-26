import React, { useState } from 'react';
import { resetPassword } from "../../environment/Api";

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // esqueci minha senha
  const forgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await resetPassword(email);
      setSuccess(true);
    } catch (error) {
      setError('Ocorreu um erro ao enviar o e-mail de redefinição de senha.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Esqueci minha senha</h1>
      <form onSubmit={forgotPassword}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
        {error && <p>{error}</p>}
        {success && <p>Um e-mail de redefinição de senha foi enviado para {email}.</p>}
      </form>
    </div>
  );
};

export default ResetPassword;
