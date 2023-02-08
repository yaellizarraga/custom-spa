import * as React from 'react'
import { Container, createTheme, Grid, ThemeProvider } from '@mui/material'
import Contact from '../../components/contactForm/contact'
import MainMenu from '../../components/menu/menu';
import Footer from '../../components/footer/footer';
import HeadTag from '../../components/headTag/headTag';

export default function Contacto () {
    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            <HeadTag title='Contacto - El Encanto' />
            <MainMenu />
            <Container>
                <Grid container pt={7}>
                    <Contact/>
                </Grid>
            </Container>
            <Footer />
        </ThemeProvider>
    )
}