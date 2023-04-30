import { TextField } from '@mui/material';

const InputNumber = ({ props }) => {
  const { register, errors } = props;

  return (
    <TextField
      label="Number"
      variant="outlined"
      {...register('number', { required: true })}
      error={Boolean(errors.number)}
      helperText={errors.number && 'Number is required'}
      placeholder={'0678833883'}
    />
  );
};

export default InputNumber;
