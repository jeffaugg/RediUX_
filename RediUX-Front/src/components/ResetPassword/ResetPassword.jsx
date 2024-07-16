import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { TextField, Button, Alert, Typography } from '@mui/material';

import CustomToolBar from '../CustomToolBar/CustomToolBar';
import LogoImgSml from '../../assets/logo-sml.svg';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const auth = getAuth();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const forgotPassword = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
    } catch (error) {
      const errorCode = error.code;
      let errorMessage = 'Ocorreu um erro ao enviar o e-mail de redefinição de senha.';

      switch (errorCode) {
        case 'auth/user-not-found':
          errorMessage = 'Usuário não encontrado.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'E-mail inválido.';
          break;
        default:
          console.error(error);
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CustomToolBar isADM={false}>
        <a href="/login">
          <img src={LogoImgSml} height={38} alt="logo-sml" />
        </a>
      </CustomToolBar>

      <div className="reset-password-container">
        <Typography variant="h4" gutterBottom>Esqueci minha senha</Typography>

        <form onSubmit={forgotPassword}>
          <TextField
            id="email"
            label="E-mail"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            fullWidth
            margin="normal"
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading}
            fullWidth
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </Button>

          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="success">Um e-mail de redefinição de senha foi enviado para {email}.</Alert>}
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
