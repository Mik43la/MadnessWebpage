
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate();
  const goTo = (url) => {
    navigate(url);
  };
    return (

        <AppBar position="static" >
        <Toolbar >
         
            <Typography variant="h6" onClick={() => goTo('/auth/home')} component="div" sx={{ flexGrow: 2 }}>
              Madness
            </Typography>
         
          
      
          <Button onClick={() => goTo('/auth/login')}  color="inherit">Logout</Button>
        </Toolbar>
    </AppBar>
    );
}
export default NavBar;