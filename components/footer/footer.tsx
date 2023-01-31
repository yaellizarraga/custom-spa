import * as React from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Copyright from '../copyrigth/copy';

export default function Footer() {
    return (
        <Box sx={{ bgcolor: '#262627', p: 6 }} component="footer" mt={7}>
            <Typography
            variant="subtitle1"
            align="center"
            color="white"
            component="p"
            >
            Esto es un pie de página
            </Typography>
            <Copyright />
        </Box>
    )
}