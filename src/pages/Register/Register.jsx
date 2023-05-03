import { useForm } from 'react-hook-form';

import { InputEmail, InputName, InputPassword } from 'components/Form';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/authOperations';

import ModalAuth from 'components/Modal/ModalAuth';
import { ButtonType } from 'components/Form/ButtonType';
import { Form } from 'components/Form/Form.styled';

const Register = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    dispatch(signUp(data));
  };

  return (
    <ModalAuth isOpen={true}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputName props={{ register, errors }} />
        <InputEmail props={{ register, errors }} />
        <InputPassword props={{ register, errors }} />
        <ButtonType type="submit">SIGN UP</ButtonType>
      </Form>
    </ModalAuth>
  );
};

export default Register;
