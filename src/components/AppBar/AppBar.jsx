import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useMediaQuery } from '@mui/material';

import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'Hooks/useAuth';
import {
  StyledAppBar,
  containerStyled,
  styledBox,
  styledContactPhoneIcon,
  styledMenu,
  toolBarStyled,
  typographyStyledDesk,
  typographyStyledMob,
} from './AppBar.styled';

const { REACT_APP_BACKEND_URL } = process.env;

const settings = [
  { title: 'Profile', nav: 'profile' },
  { title: 'Logout', nav: '/' },
];

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const matches = useMediaQuery('(min-width:380px)');
  const {
    isLogin,
    user: { name, avatarURL },
  } = useAuth();

  const isGravatar = avatarURL?.slice(0, 2) === '//';

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
    <StyledAppBar>
      <Container maxWidth="xl">
        <Container sx={{ ...containerStyled }}>
          <ContactPhoneIcon
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => navigate('/')}
            sx={{ ...typographyStyledMob }}
          >
            PHONEBOOK
          </Typography>
        </Container>
        <Toolbar disableGutters sx={{ ...toolBarStyled }}>
          <Navigation />
          <div className="logo">
            <ContactPhoneIcon sx={{ ...styledContactPhoneIcon }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => navigate('/')}
              sx={{
                ...typographyStyledDesk,
              }}
            >
              PHONEBOOK
            </Typography>
          </div>
          <AuthNav />
          {isLogin && (
            <Box sx={{ ...styledBox }}>
              <Typography sx={{ mr: 2 }}>
                {matches ? `wellcome, ${name}       ` : ''}
              </Typography>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={name}
                    src={
                      isGravatar
                        ? `https:${avatarURL}?d=wavatar`
                        : `${REACT_APP_BACKEND_URL}/${avatarURL}`
                    }
                    // sx={{ width: 150, height: 150 }}
                  />
                  {/* <Avatar sx={{ bgcolor: 'rgb(87, 100, 90)' }}>
                    {name.slice(0, 2)}
                  </Avatar> */}
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ ...styledMenu }}
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
    </StyledAppBar>
  );
};
export default ResponsiveAppBar;
