import * as React from 'react';
import '../App.css';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar id="image1">
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor:'background.paper=',
            pt:8,
            pt:6,
          }}
        />
        <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              <img src="https://vignette.wikia.nocookie.net/logopedia/images/c/cd/Sobe_logo.png/revision/latest/scale-to-width-down/2000?cb=20190727172420" height="120px" width="400px"/>
            </Typography>
            <Typography variant="h5" align="center" color="green" paragraph>
              Eat Plenty, Eat Healthy
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" id="blank">Meals</Button>
              <Button variant="outlined" id="blank">Sides</Button>
              <Button variant="contained" id="blank"> Deserts</Button>
            </Stack>
          </Container>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        id="blank"
        component="img"
        height="300px"
        width="auto"
        image={require("/workspace/Food-Menu-2/menu/src/components/images/c5d09362233188d799e295444812ed64.jpg")}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizzo's Bacon Meal
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Enjoy Lizzo's Bacon Burger
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        id="blank"
        component="img"
        height="300px"
        width="auto"
        image={require("/workspace/Food-Menu-2/menu/src/components/images/exps6086_HB133235C07_19_4b_WEB-1.jpg")}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizzy's Apple Pie
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Order</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        id="blank"
        component="img"
        height="300px"
        width="auto"
        image={require("/workspace/Food-Menu-2/menu/src/components/images/southern-chicken-fingers-11.jpg")}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard Gizzards
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Don't ask how we got the gizzards, 6,000 species of lizzards will understand.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Order</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        id="blank"
        component="img"
        height="300px"
        width="auto"
        image={require("/workspace/Food-Menu-2/menu/src/components/images/Pizza-Spaghetti-Style-58a726025f9b58a3c95130c3.jpg")}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          Lizzo's Spagetti Surprise
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Order</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        
        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        id="blank"
        component="img"
        height="300px"
        width="auto"
        image={require("/workspace/Food-Menu-2/menu/src/components/images/Summer-Vegetable-Soup_exps18529_HWS133216C07_11_2bC_RMS.jpg")}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Order</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        id="blank"
        component="img"
        height="300px"
        width="auto"
        image={require("/workspace/Food-Menu-2/menu/src/components/images/900_seths-lizard-cake-30738ojShg.jpg")}
        alt="green iguana"
      />
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizzy the Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Chow down on our staple Lizzy the Lizard desert for a burst of chocolate and frosting to WOW your taste buds!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Order</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
        </Grid>
      </Grid>
    </Box>
        
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 1 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}