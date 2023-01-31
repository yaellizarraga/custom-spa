import * as React from 'react'
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'
import { Fade } from 'react-awesome-reveal'
import Proyects from '../../pages/api/data'
import { useRouter } from 'next/router';

export default function Projects() {

    const router = useRouter();
    
    const goToProject = (id: number) => {
        router.push('/proyectos/' + id.toString())
    }
    
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4} mb={5}>
            {Proyects.map((proyect, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '10%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {proyect.title}
                    </Typography>
                    <Typography>
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
    )
}