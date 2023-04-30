import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';

import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import phone from '../../images/phone.jpg';
import { useNavigate } from 'react-router-dom';

const settings = [
  { title: 'Profile', nav: 'contacts' },
  { title: 'Logout', nav: '/' },
];

function ResponsiveAppBar() {
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = useState(null);
  //   (React.useState < null) | (HTMLElement > null);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSettings = nav => {
    handleCloseUserMenu();
    navigate(nav);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundImage: `url(${phone})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => navigate('/')}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                flexGrow: 0,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              PHONEBOOK
            </Typography>
          </div>

          <Navigation />
          <AuthNav />
          <div style={{ display: 'flex' }}>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              onClick={() => navigate('/')}
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 0,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              PHONEBOOK
            </Typography>
          </div>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ bgcolor: 'green' }}>name</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(setting => (
                <MenuItem
                  key={setting.title}
                  onClick={() => handleSettings(setting.nav)}
                >
                  <Typography textAlign="center">{setting.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
