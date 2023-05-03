import { useForm } from 'react-hook-form';

import { InputEmail, InputPassword } from 'components/Form';
import { login } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

import ModalAuth from 'components/Modal/ModalAuth';

import { ButtonType } from 'components/Form/ButtonType';
import { Form } from 'components/Form/Form.styled';

const Login = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    dispatch(login(data));
  };

  return (
    <ModalAuth isOpen={true}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputEmail props={{ register, errors }} />
        <InputPassword props={{ register, errors }} />
        <ButtonType type="submit">LOGIN</ButtonType>
      </Form>
    </ModalAuth>
  );
};

export default Login;
