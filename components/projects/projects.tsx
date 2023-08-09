import * as React from 'react'
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material'
import { Fade } from 'react-awesome-reveal'
import { useRouter } from 'next/router'
import Link from 'next/link'
import IProjects from '../../pages/models/interfaces/project'
import Pages from '../../pages/models/pagesEnum'

export default function Projects(props: { projects: IProjects[], page?: Pages }) {

    const router = useRouter();
    let theme = createTheme();
    theme = responsiveFontSizes(theme);
    
    const goToProject = (id: number, page?: Pages) => {
        let route = (page && page == Pages.Encanto) ? '/proyectos/' : '/proyectos_externos/'
        router.push(route + id.toString())
    }
    
    return (
        <ThemeProvider theme={theme}>
            <main>
                <Container disableGutters>
                    <Grid container direction='row' mb={7} mt={7}>
                        <Grid item md={6}>
                            <Typography className='title-encanto' variant='h1' align='left'>
                                 Proyectos
                            </Typography>
                        </Grid>
                        <Grid item md={6}>
                            <Typography className='title-encanto' variant='h1' align='right'>
                                <Link href={'https://www.elencantodesarrollos.com/'} target={'_blank'}><img src="/bussines.png" alt="el-encanto-logo" className='logo-encanto-bgr' /></Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Container disableGutters>
                {/* End hero unit */}
                <Grid container spacing={4} mb={5}>
                    {props.projects.map((proyect, index) => (
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
                            <Button size="small" onClick={() => goToProject(proyect.id, props.page)}>Ver Proyecto</Button>
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