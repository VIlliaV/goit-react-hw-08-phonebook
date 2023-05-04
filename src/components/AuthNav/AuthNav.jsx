import { useAuth } from 'Hooks/useAuth';
import { NavStyle } from 'components/AppBar/AppBar.styled';

export const AuthNav = () => {
  const { isLogin } = useAuth();
  return (
    !isLogin && (
      <nav>
        <NavStyle to="register">registration</NavStyle>
        <NavStyle to="login">login</NavStyle>
      </nav>
    )
  );
};
