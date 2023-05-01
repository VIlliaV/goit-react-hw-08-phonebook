import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { InputEmail, InputName, InputPassword } from 'components/Form';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/authOperations';

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
