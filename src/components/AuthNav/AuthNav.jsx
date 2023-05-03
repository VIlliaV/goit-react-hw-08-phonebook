import { useAuth } from 'Hooks/useAuth';
import { NavStyle } from 'components/AppBar/AppBar.styled';
import { Nav } from './AuthNav.styled';

export const AuthNav = () => {
  const { isLogin } = useAuth();
  return (
    !isLogin && (
      <Nav>
        <NavStyle to="register">registration</NavStyle>
        <NavStyle to="login">login</NavStyle>
      </Nav>
    )
  );
};
