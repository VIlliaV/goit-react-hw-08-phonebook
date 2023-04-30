import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';

import { Form } from './ContactForm.styled';

import { useForm } from 'react-hook-form';

import { Button } from '@mui/material';
import { InputName, InputNumber } from 'components/Form';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addNewUser = data => {
    const { name, number } = data;
    if (contacts.find(option => option.name === name)) {
      toast.error(`${name} already in contact`);
    } else {
      toast.success('contact is added');
      const newUser = {
        name,
        phone: number,
      };
      dispatch(addContact(newUser));
    }
  };

  return (
    <Form onSubmit={handleSubmit(addNewUser)}>
      <InputName props={{ register, errors }} />
      <InputNumber props={{ register, errors }} />
      <Button type="submit" variant="contained">
        Login
      </Button>
    </Form>
  );
};
