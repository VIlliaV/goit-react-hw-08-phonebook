// import { NavLink } from 'react-router-dom';
import { NavStyle } from 'components/AppBar/AppBar.styled';
import { Nav } from './Navigation.styled';
import { useAuth } from 'Hooks/useAuth';

export const Navigation = () => {
  const { isLogin } = useAuth();

  return (
    <Nav>
      {!isLogin ? (
        <NavStyle to="/">Home</NavStyle>
      ) : (
        <NavStyle to="contacts">Contacts</NavStyle>
      )}
    </Nav>
  );
};
