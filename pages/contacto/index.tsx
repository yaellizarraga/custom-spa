import * as React from 'react'
import { Container, createTheme, Grid, ThemeProvider } from '@mui/material'
import Contact from '../../components/contactForm/contact'
import MainMenu from '../../components/menu/menu';

export default function Contacto () {
    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            <MainMenu />
            <Container>
                <Grid container pt={7}>
                    <Contact/>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}