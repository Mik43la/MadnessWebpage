import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import logo from '../../assets/logo-nstm.png';

export const NavBar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#ff4654' }}>
      <Toolbar>
        <img src={logo} alt="Non Stop The Madness" style={{ height: '40px', marginRight: '10px' }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 2, fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
          Non Stop The Madness
        </Typography>
        <Button color="inherit" href="/user/artists">
          Artistas
        </Button>
        <Button color="inherit" href="/user/events">
          Eventos
        </Button>
        <Button color="inherit" href="/user/home">
          Inicio
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
