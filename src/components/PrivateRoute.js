import { useAuth } from 'Hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogin } = useAuth();

  return isLogin ? Component : <Navigate to={redirectTo} />;
};
