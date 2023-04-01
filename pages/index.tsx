import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import MainMenu from '../components/menu/menu'
import Footer from '../components/footer/footer'
import Carousel from 'react-material-ui-carousel'
import Contact from '../components/contactForm/contact'
import Services from '../components/services/services'
import { Container } from '@mui/system'
import { Grid, Typography } from '@mui/material'
import HeadTag from '../components/headTag/headTag'

const items = [
  {
      src: "/logomrexpertos.jpg",
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
      <HeadTag title='Inicio - El Encanto' />
      <MainMenu />
      <main>
        {/* Hero unit */}
        <Box>
          <Carousel>
            {
              items.map((item, index) => (
                <div className={'image-container'} key={index}>
                  {/*<p className='slider-text'>MR. EXPERTOS</p>*/}
                  <img src={item.src} alt={item.alt} className={'image'} />
                </div>
              ))
            }
          </Carousel>
        </Box>
        <Container disableGutters>
            <Grid container direction='row' mb={7} mt={7}>
                <Grid item md={12}>
                    <Typography className='title-encanto' variant='h1' align='left'>
                        Acerca de nosotros
                    </Typography>
                </Grid>
            </Grid>
            <Grid container direction='row' mb={7}>
                <Grid item md={12}>
                    <Typography variant='body1' align='justify'>
                      MR EXPERTOS EN PROYECTOS es líder en el desarrollo de la construcción y es una rama del grupo MR, formado originalmente en 2007 en la Ciudad de México. Nuestro grupo se dedica a la consultoría y desarrollo de proyectos integrales de construcción para el bienestar social y ambiental de la comunidad, desde el diseño hasta la construcción, contando con especialistas en cada una de sus áreas. Los desarrollos El Encanto es la unidad de negocio donde se comercializan los productos construidos por los expertos en proyectos de MR, junto a nuestro sector de desarrollo estamos generando un excelente ambiente para la inversión debido a nuestro compromiso con un producto terminado de alta calidad y servicio al cliente. Nos enorgullecemos de entregar con seguridad y credibilidad, un producto terminado, en o antes de nuestra fecha de finalización. Seguiremos incrementando la presencia de nuestra infraestructura y proyectos en la maravillosa ciudad de Mazatlán, Sinaloa.
                    </Typography>
                    <Typography variant='caption'>
                      English below
                    </Typography>
                </Grid>
            </Grid>
            <Grid container direction='row'>
                <Grid item md={12}>
                    <Typography variant='body1' align='justify'>
                      MR EXPERTS IN PROJECTS is a leader in construction development and is a branch of the MR group, originally formed in 2007 in Mexico City. Our group is dedicated to consulting and developing comprehensive construction projects for the social and environmental well-being of the community, from design to construction, with specialists in each of its areas. El Encanto (The Charm) developments is the business unit where the products built by MR project experts are marketed. together with our development sector we are generating an excellent environment for investment due to our commitment to a high quality finished product and customer service. We pride ourselves on delivering with assurance and credibility, a finished product, on or before our completion date. We will continue to increase the presence of our infrastructure and projects in the wonderful city of Mazatlán, Sinaloa.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
        <Services />
        <Container>
          <Contact />
        </Container>
      <Footer />
      </main>
    </ThemeProvider>
  );
}