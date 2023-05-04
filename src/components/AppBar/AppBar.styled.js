import styled from 'styled-components';
import { styled as styledMui } from '@mui/system';
import leaf from '../../images/leaf.jpg';
import { NavLink } from 'react-router-dom';
import { AppBar } from '@mui/material';

export const NavStyle = styled(NavLink)`
  color: white;
  padding: 10px 15px;
  margin-left: 20px;
  &:hover {
    border: 1px solid rgba(170, 249, 190, 0.742);
    border-radius: 5px;

    box-shadow: 2px 2px 4px rgba(170, 249, 190, 0.742);
  }
  &.active {
    color: rgba(170, 249, 190, 0.742);
    border: 1px solid rgba(170, 249, 190, 0.742);
    border-radius: 5px;

    box-shadow: 2px 2px 4px rgba(170, 249, 190, 0.742);
  }
`;

const StyledAppBar = styledMui(AppBar)({
  position: 'sticky',
  fontSize: '20px',
  backgroundImage: `url(${leaf})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
  borderBottom: '3px solid rgb(87, 100, 90)',
  boxShadow: '6px 6px 12px rgba(170, 249, 190, 0.742)',
  '& .logo ': { display: 'flex', alignItems: 'center' },
});

const containerStyled = {
  display: { xs: 'flex', md: 'none' },
  justifyContent: 'center',
  alignItems: 'center',
};

const typographyStyledMob = {
  mr: 2,
  display: { xs: 'flex', md: 'none' },
  flexGrow: 0,
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
};

const typographyStyledDesk = {
  mr: 2,
  display: { xs: 'none', md: 'flex' },
  flexGrow: 0,
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
};

const toolBarStyled = { justifyContent: 'space-between', gap: '8px' };

const styledContactPhoneIcon = { display: { xs: 'none', md: 'flex' }, mr: 1 };

const styledBox = { flexGrow: 0, display: 'flex', alignItems: 'center' };

const styledMenu = {
  mt: '45px',
  backgroundColor: 'rgba(179, 19, 19, 0.742), ',
};

export {
  StyledAppBar,
  containerStyled,
  typographyStyledMob,
  toolBarStyled,
  styledContactPhoneIcon,
  typographyStyledDesk,
  styledBox,
  styledMenu,
};
