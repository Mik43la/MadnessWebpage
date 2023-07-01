import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from '@mui/material';
import NavBar from '../components/NavBar';
import { useNavigate } from "react-router-dom";

function HomePage(){
    const navigate = useNavigate();

    const goTo = (url) => {
        navigate(url);
      };

    return(
        <>
        <NavBar></NavBar>
        <Grid container direction="row" alignContent="center"  spacing={10} sx={{my:10, mx:10, px:10 } } >
        <Grid item >
            <Card sx={{ maxWidth: 545 }}>
            <CardActionArea onClick={() => goTo('/auth/events')}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://source.unsplash.com/random?wallpapers"
                    alt="green iguana"
                />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Events
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Events section
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Click for more
                </Button>
            </CardActions>
            </Card>
        </Grid>
        <Grid item >
            <Card sx={{ maxWidth: 545 }}>
            <CardActionArea onClick={() => goTo('/auth/artists')}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://source.unsplash.com/random?wallpapers"
                    alt="green iguana"
                />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Artists
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Artists section
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Click for more
                </Button>
            </CardActions>
            </Card>
        </Grid>
        
        </Grid>
        </>
    )

}
export default HomePage;