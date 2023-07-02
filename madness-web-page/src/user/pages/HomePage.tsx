import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from '@mui/material';
import NavBar from '../components/NavBar';
import { useNavigate } from "react-router-dom";
import background from "../../assets/background.jpg";
import musica from "../../assets/musica.jpg";

function HomePage() {
  const navigate = useNavigate();

  const goTo = (url) => {
    navigate(url);
  };

  return (
    <>
      <NavBar />
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: 'calc(100vh - 64px)', // Adjust the value based on your navbar height
          padding: '40px',
        }}
      ></div>
      <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ marginTop: '40px' }}>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ bgcolor: '#3b3b3b', color: 'white' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={musica}
                alt="Event"
              />
              <CardContent>
                <Typography variant="body2">
                  La Música Nos Une
                  3 días de festival en el corazón de Bolivia, 2 escenarios, artistas y DJs reconocidos mundialmente. Cada año Non Stop the Madness supera nuestras expectativas y nos trae los shows en vivo y un sinfín de experiencias.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        {/* Rest of the code */}
      </Grid>
    </>
  );
}

export default HomePage;
