import { NavStyle } from 'components/AppBar/AppBar.styled';
import { useAuth } from 'Hooks/useAuth';

export const Navigation = () => {
  const { isLogin } = useAuth();

  return (
    <nav>
      {!isLogin ? (
        <NavStyle to="/">Home</NavStyle>
      ) : (
        <NavStyle to="contacts">Contacts</NavStyle>
      )}
    </nav>
  );
};
