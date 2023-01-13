import * as React from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Copyright from '../copyrigth/copy';

export default function Footer() {
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
            >
            Esto es un pie de página
            </Typography>
            <Copyright />
        </Box>
    )
}