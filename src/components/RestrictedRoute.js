import { useAuth } from 'Hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogin } = useAuth();

  return !isLogin ? Component : <Navigate to={redirectTo} />;
};
