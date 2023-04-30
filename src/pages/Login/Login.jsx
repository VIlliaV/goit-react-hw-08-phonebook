import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { InputEmail, InputPassword } from 'components/Form';
import { login } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    // console.log('🚀 ~ data:', data);
    dispatch(login(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputEmail props={{ register, errors }} />
      <InputPassword props={{ register, errors }} />
      <Button type="submit" variant="contained">
        Login
      </Button>
    </form>
  );
};

export default Login;
