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
import leaf from '../../images/leaf.jpg';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { useAuth } from 'Hooks/useAuth';
import { useMediaQuery } from '@mui/material';

const settings = [
  { title: 'Profile', nav: 'profile' },
  { title: 'Logout', nav: '/' },
];

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const matches = useMediaQuery('(min-width:380px)');
  const {
    isLogin,
    user: { name },
  } = useAuth();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSettings = ({ nav, title }) => {
    handleCloseUserMenu();

    if (title === 'Logout') dispatch(logOut());
    else navigate(nav);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundImage: `url(${leaf})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      }}
    >
      <Container maxWidth="xl">
        <Container
          sx={{
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'center',
          }}
        >
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
        </Container>
        <Toolbar
          disableGutters
          sx={{ justifyContent: 'space-between', gap: '8px' }}
        >
          <Navigation />
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

          <AuthNav />

          {isLogin && (
            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ mr: 2 }}>
                {matches ? `wellcome, ${name}       ` : ''}
              </Typography>

              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar sx={{ bgcolor: 'green' }}>{name.slice(0, 2)}</Avatar>
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
                    onClick={() => handleSettings(setting)}
                  >
                    <Typography textAlign="center">{setting.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
