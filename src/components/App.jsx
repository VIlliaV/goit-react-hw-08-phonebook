import { Route, Routes } from 'react-router-dom';

import { Container } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login " element={<Login />} />
          <Route path="contacts" element={<Phonebook />} />
        </Route>
      </Routes>
    </Container>
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
