
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const NavBar = () => {
    return (

        <AppBar position="static" >
        <Toolbar >
          
          <Typography variant="h6"  component="div" sx={{ flexGrow: 2 }}>
            Non Stop The Madness
          </Typography>
      
          <Button color="inherit">Logout</Button>
        </Toolbar>
    </AppBar>
    );
}
export default NavBar;