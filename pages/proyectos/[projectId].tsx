import * as React from 'react';
import { Box, Container, createTheme, Grid, Paper, styled, ThemeProvider, Typography } from '@mui/material';
import MainMenu from '../../components/menu/menu';
import Copyright from '../../components/copyrigth/copy';
import CssBaseline from '@mui/material/CssBaseline'

export default function ProjectDetail() {
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
            <MainMenu />
            <CssBaseline />
            <MainMenu />
            <main>
                <Container disableGutters>
                    <Grid container spacing={2}>
                        <Grid item md={12}>
                            <Item>
                               Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, voluptate. Minima fuga blanditiis vel in consequuntur dolorum, quis facilis excepturi dolor nesciunt unde ad commodi modi ratione, qui, assumenda voluptates!
                            </Item>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item md={6}>
                            <Item>
                               Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, voluptate. Minima fuga blanditiis vel in consequuntur dolorum, quis facilis excepturi dolor nesciunt unde ad commodi modi ratione, qui, assumenda voluptates!
                            </Item>
                        </Grid>
                        <Grid item md={6}>
                            <Item>
                               Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, voluptate. Minima fuga blanditiis vel in consequuntur dolorum, quis facilis excepturi dolor nesciunt unde ad commodi modi ratione, qui, assumenda voluptates!
                            </Item>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}