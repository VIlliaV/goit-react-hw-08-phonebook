import { useEffect, useRef } from 'react';
import { useState } from 'react';

import { Container } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { getFilter, setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);

  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  useEffect(() => {
    const localContacts = localStorage.getItem('contacts');
    if (localContacts) {
      setContacts(JSON.parse(localContacts));
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  const updateContacts = newUser => {
    // const { name } = newUser;
    // if (contacts.find(option => option.name === name)) {
    //   toast.error(`${name} already in contact`);
    // } else {
    //   toast.success('contact is added');
    //   setContacts(prevState => [...prevState, newUser]);
    //   return true;
    // }
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const filterContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm updateContacts={updateContacts} />
      <h2>Contacts</h2>
      <Filter handleFilter={handleFilter} />

      {filterContacts().length !== 0 ? (
        <ContactList
          filteredContacts={filterContacts()}
          deleteContact={deleteContact}
        />
      ) : (
        <p>Please add contact</p>
      )}
    </Container>
  );
};
