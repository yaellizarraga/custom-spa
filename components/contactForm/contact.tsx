import * as React from 'react'
import { Button, Card, CardContent, Container, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import { Email } from '@mui/icons-material'
import emailjs from '@emailjs/browser'
import DialogModal from '../dialog/dialog'

export default function Contact() {
    
    const form: any = React.useRef()

    const [nombre, setNombre] = React.useState<string>()
    const [asunto, setAsunto] = React.useState<string>()
    const [email, setEmail] = React.useState<string>()
    const [mensaje, setMensaje] = React.useState<string>()
    const [openModal, setOpenModal] = React.useState<boolean>(false);

    const sendEmail = (e: any) => {
        e.preventDefault()

        emailjs.sendForm('service_f8yepbc', 'template_i6ll05n', form.current, 'eBMFVgUwZhQ21rMJu')
        .then((result) => {
            if(result) {
                setOpenModal(true);
            }
        }, (error) => {
            console.log(error.text);
        });
    };

    const handleClose = () => {
        clearForm();
        setOpenModal(false);
    }

    const clearForm = () => {
        setNombre('')
        setAsunto('')
        setEmail('')
        setMensaje('')
    }

    return (
        <form ref={form} onSubmit={sendEmail}>
            <Container disableGutters>
                <Grid container direction='row' mb={7} mt={7}>
                    <Grid item md={12}>
                        <Typography className='title-encanto' variant='h1' align='left'>
                            Contáctanos
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Card>
                <CardContent>
                    <Grid container direction='row' spacing={4}>
                        <Grid item md={6}>
                            <TextField type='text' name='fromName' variant='standard' label='Nombre' value={nombre} fullWidth/>
                        </Grid>
                        <Grid item md={6}>
                            <TextField type='text' name='fromSubject' variant='standard' label='Asunto' value={asunto} fullWidth/>
                        </Grid>
                        <Grid item md={12}>
                            <TextField 
                            type='text' 
                            variant='standard' 
                            label='Correo'
                            name='fromEmail'
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <Email />
                                </InputAdornment>
                                ),
                            }} 
                            value={email}
                            fullWidth/>
                        </Grid>
                        <Grid item md={12}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Mensaje"
                            name='fromMessage'
                            multiline
                            rows={5}
                            value={mensaje}
                            fullWidth
                            />
                        </Grid>
                        <Grid item md={6}>
                            <Button type='submit' variant="contained" className='btn-encanto'>Enviar</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <DialogModal open={openModal} handleClose={handleClose} />
    </form>
    );
}