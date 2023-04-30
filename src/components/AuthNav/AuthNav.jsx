import { NavStyle } from 'components/AppBar/AppBar.styled';

export const AuthNav = () => {
  return (
    <nav>
      <NavStyle to="register">register</NavStyle>
      <NavStyle to="login">login</NavStyle>
    </nav>
  );
};
