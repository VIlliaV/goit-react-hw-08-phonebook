import { TextField } from '@mui/material';
import { textFieldStyle } from './Input.styled';
const InputNumber = ({ props }) => {
  const { register, errors } = props;

  return (
    <TextField
      sx={{
        ...textFieldStyle,
      }}
      label="phone number"
      variant="outlined"
      {...register('number', {
        required: true,
        pattern: /^[0-9\b]+$/,
      })}
      error={Boolean(errors.number)}
      helperText={errors.number && 'Number is required'}
      placeholder={'0678833883'}
    />
  );
};

export default InputNumber;
