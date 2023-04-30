import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { InputEmail, InputName, InputPassword } from 'components/Form';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/authOperations';

const Register = () => {
  const dispatch = useDispatch();
  // register(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    // console.log(data);
    dispatch(signUp(data));
  };

  // const register = 18888;
  // const errors = 168;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputName props={{ register, errors }} />
      <InputEmail props={{ register, errors }} />
      <InputPassword props={{ register, errors }} />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default Register;
