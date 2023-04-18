import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { Form } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContact } from 'redux/contactsSlice';

export const ContactForm = ({ updateContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContact);

  const addNewUser = e => {
    e.preventDefault();
    // console.log('object :>> ', contacts);
    // if (contacts.find(option => option.name === name)) {
    //   toast.error(`${name} already in contact`);
    // } else {
    toast.success('contact is added');
    const newUser = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(newUser));
    setName('');
    setNumber('');
    // }
  };

  const changeHandler = ({ target: { value, name } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <Form onSubmit={addNewUser}>
      <Toaster />
      <label>
        Name
        <input
          onChange={changeHandler}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          onChange={changeHandler}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add User</button>
    </Form>
  );
};

ContactForm.propTypes = {
  updateContacts: PropTypes.func.isRequired,
};
