import { TextField } from '@mui/material';

const InputName = ({ props }) => {
  const { register, errors } = props;

  return (
    <TextField
      sx={{
        backgroundColor: `white`,
      }}
      label="Name"
      variant="outlined"
      {...register('name', { required: true })}
      error={Boolean(errors.name)}
      helperText={errors.name && 'Name is required'}
      placeholder={'Bill Black'}
    />
  );
};

export default InputName;
