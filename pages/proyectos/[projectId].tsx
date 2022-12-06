import * as React from 'react';
import { createTheme, ThemeProvider, Typography } from '@mui/material';
import MainMenu from '../../components/menu/menu';
import Copyright from '../../components/copyrigth/copy';

export default function ProjectDetail() {
    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            <MainMenu />
            <main>
            <Typography>Esta será la pagina del detalle de proyecto</Typography>
            </main>
            <Copyright />
        </ThemeProvider>
    );
}