import * as React from 'react'
import { Box, Container, createTheme, Grid, ThemeProvider, Typography } from '@mui/material'
import MainMenu from '../../components/menu/menu'
import Footer from '../../components/footer/footer'
import CssBaseline from '@mui/material/CssBaseline'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRouter } from 'next/router'
import data from '../api/data'
import Image from 'next/image'
import 'swiper/css';

export default function Project() {
    const router = useRouter();
    const theme = createTheme();
    const { projectId } = router.query;
    const project = data.find(project => project.id.toString() == projectId)
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MainMenu />
            <main>
                <Container disableGutters>
                    {typeof project != 'undefined' ? 
                    <Grid container>
                        <Grid container 
                            spacing={4} 
                            pt={5} 
                            pb={5} 
                            direction='row' 
                            alignItems='center'
                            justifyContent='center'>
                            <Grid item md={12} sm={12}>
                                <Typography align='center' variant='h3'>
                                    {project.title}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={4} pt={5} pb={5}>
                            <Grid item md={6} sm={12} style={{ display: 'flex' }}>
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    style={{ display: 'block', width: '100%' }}
                                    >
                                    {
                                        project.img.map((img, index) => (
                                            <SwiperSlide key={index}>
                                                <Image 
                                                    src={img}
                                                    alt={'test'}
                                                    fill
                                                    style={{objectFit: 'contain'}}
                                                />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </Grid>
                            <Grid item md={6} sm={12}>
                                <Typography variant='body1'>
                                    {project.description}
                                </Typography>
                            </Grid>
                            <Grid container spacing={4} pt={5} pb={5}>
                                <Grid item md={12} sm={12}>
                                    <Typography align='center' variant='h4'>
                                        UBICACIÓN: {project.direccion}
                                    </Typography>
                                </Grid>
                            </Grid>
                            {project.googleMaps ?
                                <Grid container spacing={4} pb={5} pt={5}>
                                    <Grid item md={12} sm={12}>
                                        <iframe src={project.googleMaps}  style={{ width: '100%', height: '80vh' }} loading="lazy"></iframe>
                                    </Grid>
                                </Grid> : <div></div>
                            }
                        </Grid> 
                    </Grid>: <div></div>}
                </Container>
            </main>
            <Footer />
        </ThemeProvider>
    );
}