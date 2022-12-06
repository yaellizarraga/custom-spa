import * as React from 'react';
import { createTheme, ThemeProvider, Typography } from '@mui/material';
import MainMenu from '../../components/menu/menu';

export default function ProjectDetail() {
    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            <MainMenu />
            <main>
                <Typography>Esta será la pagina de la galeria de proyectos</Typography>
            </main>
        </ThemeProvider>
    );
}