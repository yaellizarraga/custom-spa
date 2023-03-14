import * as React from 'react'
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, ThemeProvider, createTheme } from '@mui/material'
import { Fade } from 'react-awesome-reveal'
import Proyects from '../../pages/api/data'
import { useRouter } from 'next/router'

export default function Projects() {

    const router = useRouter();
    const theme = createTheme();
    
    const goToProject = (id: number) => {
        router.push('/proyectos/' + id.toString())
    }
    
    return (
        <ThemeProvider theme={theme}>
            <main>
                <Container disableGutters>
                    <Grid container direction='row' mb={7} mt={7}>
                        <Grid item md={12}>
                            <Typography variant='h1' align='left'>
                                 Proyectos
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Container disableGutters>
                {/* End hero unit */}
                <Grid container spacing={4} mb={5}>
                    {Proyects.map((proyect, index) => (
                    <Grid item key={index} xs={12} sm={6} md={6}>
                        <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                        <CardMedia
                            component="img"
                            sx={{
                            // 16:9
                            pt: '10%',
                            }}
                            image={proyect.mainImg ? proyect.mainImg : 'https://source.unsplash.com/random'}
                            alt="random"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                            {proyect.title}
                            </Typography>
                            <Typography align='justify'>
                            <Fade>
                                {proyect.shortDescription}
                            </Fade>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => goToProject(proyect.id)}>Ver Proyecto</Button>
                        </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
                </Container>
            </main>
        </ThemeProvider>
    )
}