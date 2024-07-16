import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@mui/material';
import { createUserWithEmailAndPassword, auth } from '../../config/firebase';

const ModalUserAdd = ({ open, setOpen }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setOpen(false);  // Feche o modal após salvar
    } catch (error) {
      console.error(error);
      setError(error.message);  // Defina a mensagem de erro se ocorrer um erro
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Adicionar Usuário</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Por favor, insira o email e a senha para adicionar um novo usuário.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email"
          type="email"
          fullWidth
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="dense"
          id="password"
          label="Senha"
          type="password"
          fullWidth
          variant="standard"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <DialogContentText color="error">{error}</DialogContentText>}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleSave}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalUserAdd;
