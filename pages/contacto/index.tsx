import * as React from 'react'
import { Container, createTheme, CssBaseline, Grid, responsiveFontSizes, ThemeProvider } from '@mui/material'
import Contact from '../../components/contactForm/contact'
import MainMenu from '../../components/menu/menu';
import Footer from '../../components/footer/footer';
import HeadTag from '../../components/headTag/headTag';

export default function Contacto () {
    let theme = createTheme();
    theme = responsiveFontSizes(theme);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <HeadTag title='Contacto - El Encanto' />
            <MainMenu />
            <Container>
                <Contact/>
            </Container>
            <Footer />
        </ThemeProvider>
    )
}