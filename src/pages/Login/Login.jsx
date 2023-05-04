import { useForm } from 'react-hook-form';

import { ButtonType, Form, InputEmail, InputPassword } from 'components/Form';
import { login } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

import ModalAuth from 'components/Modal/ModalAuth';

import { useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { useAuth } from 'Hooks/useAuth';

const Login = () => {
  const dispatch = useDispatch();
  const isNoError = useRef(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginError } = useAuth();
  useEffect(() => {
    if (isNoError.current) return;
    if (loginError) {
      toast.error('something went wrong try again');
      isNoError.current = true;
    }
  });

  const onSubmit = data => {
    dispatch(login(data));
    isNoError.current = false;
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
