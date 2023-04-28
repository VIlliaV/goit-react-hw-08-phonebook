import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <nav>
      <NavLink to="register">register</NavLink>
      <NavLink to="login">login</NavLink>
    </nav>
  );
};
