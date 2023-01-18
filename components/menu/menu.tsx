import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import { Box, IconButton, MenuItem, Button, createTheme } from '@mui/material';
import { Container } from '@mui/system';
import Link from 'next/link';

export default function MainMenu() {

  const pages = [
    {text: 'inicio', route: '/' }, 
    {text: 'Proyectos', route: '/proyectos' }, 
    {text: 'Contactanos', route: '/contacto' }];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
      <AppBar position="relative" color='default'>
        <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            letterSpacing: '.3rem',
            textDecoration: 'none',
          }}
          >
            <img src="/bussines.png" alt="el-encanto-logo" className='logo-encanto' />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Link href={ page.route }><Typography textAlign="center" variant='h3'>{ page.text }</Typography></Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <img src="/bussines.png" alt="el-encanto-logo" className='logo-encanto' />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, index) => (
                <Link href={page.route}>
                  <Button
                    key={index}
                    onClick={handleCloseNavMenu}
                    style={{ fontSize: '12pt', fontWeight: '700' }}
                    sx={{ my: 2, color: '#9f9931', display: 'block'}}
                  >
                    {page.text}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
          </Container>
      </AppBar>
  )
}