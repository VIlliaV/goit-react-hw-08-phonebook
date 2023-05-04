import { useForm } from 'react-hook-form';

import {
  ButtonType,
  Form,
  InputEmail,
  InputName,
  InputPassword,
} from 'components/Form';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/authOperations';

import ModalAuth from 'components/Modal/ModalAuth';

import { useAuth } from 'Hooks/useAuth';
import { toast } from 'react-hot-toast';
import { useEffect, useRef } from 'react';

const Register = () => {
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
    dispatch(signUp(data));
    isNoError.current = false;
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
