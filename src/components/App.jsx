import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// import { Container } from './App.styled';

import { Layout } from './Layout/Layout';
// import { Home } from 'pages/Home/Home';
// import { Register } from 'pages/Register/Register';
// import { Login } from 'pages/Login/Login';
import { Phonebook } from 'pages/Phonebook/Phonebook';
import { lazy } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));

export const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Phonebook />} />
        </Route>
      </Routes>
    </div>
  );
};

// export const App = () => {
//   return (
//     <Container>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       <ContactList />
//     </Container>
//   );
// };
