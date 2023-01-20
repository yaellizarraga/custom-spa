import * as React from 'react'
import { Button, Card, CardContent, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { Email } from '@mui/icons-material';

export default function Contact() {
    return (
    <Card>
        <CardContent>
            <Grid container direction='row' spacing={4}>
                <Grid item md={12}>
                    <Typography variant='h3' align='center'>
                        Contactanos
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <TextField type='text' variant='standard' label='Nombre' fullWidth/>
                </Grid>
                <Grid item md={6}>
                    <TextField type='text' variant='standard' label='Asunto' fullWidth/>
                </Grid>
                <Grid item md={12}>
                    <TextField 
                    type='text' 
                    variant='standard' 
                    label='Correo'
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email />
                          </InputAdornment>
                        ),
                      }} 
                    fullWidth/>
                </Grid>
                <Grid item md={12}>
                <TextField
                    id="outlined-multiline-static"
                    label="Mensaje"
                    multiline
                    rows={5}
                    fullWidth
                    />
                </Grid>
                <Grid item md={6}>
                    <Button variant="contained">Enviar</Button>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
    );
}