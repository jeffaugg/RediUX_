import { TextField } from "@mui/material";
import React from "react";

const LoginForm = ({ user, password, handleUserChange, handlePasswordChange }) => {
  return (
    <>
      <TextField
        required
        fullWidth
        margin="normal"
        autoFocus

        label="Nome de Usuário"
        id="username"
        name="username"
        type="username"
        value={user}
        onChange={handleUserChange}
      />

      <TextField
        required
        fullWidth
        margin="normal"

        label="Senha"
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
    </>
  );
};

export default LoginForm;