import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

function ModalPassword({ open, onClose, onSubmit }) {
  const [password, setPassword] = useState('');
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIncorrectPassword(false); // Reiniciar el estado de contraseña incorrecta
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === '') {
      return; // Evitar envío si no se ha ingresado una contraseña
    }
    if (onSubmit(password)) {
      // Si la contraseña es correcta
      setPassword(''); // Reiniciar el estado de la contraseña
      onClose(); // Cerrar el modal
    } else {
      // Si la contraseña es incorrecta
      setIncorrectPassword(true);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Enter Password</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            value={password}
            onChange={handlePasswordChange}
            label="Password"
            type="password"
            fullWidth
            required
            error={incorrectPassword} // Mostrar error si la contraseña es incorrecta
            helperText={incorrectPassword && 'Incorrect password. Please try again.'} // Mensaje de error
          />
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalPassword;
