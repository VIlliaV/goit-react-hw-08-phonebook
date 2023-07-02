import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Layout } from './Layout/Layout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'Hooks/useAuth';
import { Loader } from './Loader/Loader';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Profile } from 'pages/Profile/Profile';
import { UpdateProfile } from './UpdateProfile/UpdateProfile';

const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Phonebook = lazy(() => import('pages/Phonebook/Phonebook'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  const { isRefresh } = useAuth();

  return isRefresh ? (
    <Loader />
  ) : (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RestrictedRoute component={<Home />} redirectTo="/contacts" />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                component={<Register />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute component={<Login />} redirectTo="/contacts" />
            }
          />

          <Route
            path="contacts"
            element={<PrivateRoute component={<Phonebook />} redirectTo="/" />}
          />
          <Route
            path="profile"
            element={<PrivateRoute component={<Profile />} redirectTo="/" />}
          />
          <Route
            path="profile/update"
            element={
              <PrivateRoute component={<UpdateProfile />} redirectTo="/" />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
