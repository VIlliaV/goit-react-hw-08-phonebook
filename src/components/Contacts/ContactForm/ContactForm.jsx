import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';

import { ButtonType, Form, InputName, InputNumber } from 'components/Form';
import ModalAuth from 'components/Modal/ModalAuth';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const {
    register,
    handleSubmit,
    reset,
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
        number,
      };
      reset();
      dispatch(addContact(newUser));
    }
  };

  return (
    <ModalAuth isOpen={false} nameOpenButtonModal="NEW CONTACT">
      <Form onSubmit={handleSubmit(addNewUser)}>
        <InputName props={{ register, errors }} />
        <InputNumber props={{ register, errors }} />
        <ButtonType type="submit">ADD CONTACT</ButtonType>
      </Form>
    </ModalAuth>
  );
};
