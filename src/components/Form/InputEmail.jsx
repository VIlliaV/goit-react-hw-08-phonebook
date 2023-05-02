import { TextField } from '@mui/material';

const InputEmail = ({ props }) => {
  const { register, errors } = props;

  return (
    <TextField
      sx={{
        backgroundColor: `white`,
      }}
      label="Email"
      variant="outlined"
      {...register('email', {
        required: true,
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      })}
      error={Boolean(errors.email)}
      helperText={errors.email && 'Enter a valid email address'}
      placeholder={'email@example.com'}
    />
  );
};

export default InputEmail;
