import * as React from 'react'
import Typography from '@mui/material/Typography';
import { Box, Divider, Grid } from '@mui/material';
import Copyright from '../copyrigth/copy';
import { Container } from '@mui/system';

export default function Footer() {
    return (
        <Box sx={{ bgcolor: '#262627', p: 6 }} component="footer" mt={7}>
            <Container disableGutters>
                <Grid container direction='row' mb={7} mt={7}>
                    <Grid item md={6}>
                    <Typography variant='h3' className='title-encanto'>
                        Bienvenido a MR Expertos
                    </Typography>
                    <Typography
                        align="justify"
                        color="white"
                        component="p"
                        >
                            Encuentra tu nuevo proyecto inmobiliario aquí. Ofrecemos un servicio personalizado y de calidad para atenderte en todas tus necesidades sobre el mundo inmobiliario. Si necesitas asistencia o tienes preguntas, siéntete libre de contactarnos. Estaremos dispuestos a ayudarte.
                        </Typography>
                    </Grid>
                    <Grid item md={6}>

                    </Grid>
                </Grid>
                <Divider />
                <Grid container direction='row' mb={0} mt={2}>
                    <Grid item md={12}>
                        <Copyright />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}