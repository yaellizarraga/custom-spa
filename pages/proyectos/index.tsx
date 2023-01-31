import * as React from 'react';
import { Box, Container, createTheme, Grid, Paper, styled, ThemeProvider, Typography } from '@mui/material';
import MainMenu from '../../components/menu/menu';
import CssBaseline from '@mui/material/CssBaseline'
import ProjectsPage from '../../components/projects/projects';

export default function Projects() {

    const theme = createTheme();
    const Item = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: '2%'
      }));
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MainMenu />
            <main>
                <ProjectsPage />
            </main>
        </ThemeProvider>
    );
}