import * as React from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import MainMenu from '../components/menu/menu'
import Copyright from '../components/copyrigth/copy'
import Carousel from 'react-material-ui-carousel'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var items = [
  {
      src: "/business_center.png",
      alt: "Imagen 1",
      key:1
  },
  {
      src: "/club_golf.jpg",
      alt: "Imagen 2",
      key: 2
  }
]

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainMenu />
      <main>
        {/* Hero unit */}
        <Box>
          <Carousel>
            {
              items.map(item => (
                <div className={'image-container'} key={item.key}>
                  <img src={item.src} alt={item.alt} className={'image'} />
                </div>
              ))
            }
          </Carousel>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '10%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Proyecto ejemplo
                    </Typography>
                    <Typography>
                      Esta es una descripcion de ejemplo
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Ver Proyecto</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        Esto es un pie de página
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}