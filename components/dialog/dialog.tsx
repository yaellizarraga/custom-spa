import * as React from "react";
import { Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from '@mui/material'

export default function DialogModal (props: { open: boolean, handleClose: () => void }) {
    return (
        <Box>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Formulario de contacto"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Su mensaje a sido enviado con exito al equipo de El Encanto
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={props.handleClose} autoFocus>
                    Aceptar
                </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}