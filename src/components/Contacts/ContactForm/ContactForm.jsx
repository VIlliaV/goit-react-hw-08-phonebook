import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';

import { useForm } from 'react-hook-form';

import { InputName, InputNumber } from 'components/Form';
import ModalAuth from 'components/Modal/ModalAuth';
import { ButtonType } from 'components/Form/ButtonType';
import { Form } from 'components/Form/Form.styled';

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
        number,
      };
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
