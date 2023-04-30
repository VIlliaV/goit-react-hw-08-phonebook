// import { NavLink } from 'react-router-dom';
import { NavStyle } from 'components/AppBar/AppBar.styled';
import { Nav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <NavStyle to="/">Home</NavStyle>
      <NavStyle to="contacts">Contacts</NavStyle>
    </Nav>
  );
};
