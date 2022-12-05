import * as React from 'react'
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Todos los detechos reservador © '}
        <Link color="inherit" href="https://mui.com/">
          El Encanto 
        </Link>{' '}
        {new Date().getFullYear() + ' '}
        - Powered By Zamtos Tech {'.'}
      </Typography>
    );
  }