import { TextField } from '@mui/material';
import { textFieldStyle } from './Input.styled';

const InputName = ({ props }) => {
  const { register, errors, handleFilter = () => {} } = props;

  return (
    <TextField
      sx={{
        ...textFieldStyle,
      }}
      label="Name"
      variant="outlined"
      {...register('name', { required: true, onChange: e => handleFilter(e) })}
      error={Boolean(errors.name)}
      helperText={errors.name && 'Name is required'}
      placeholder={'Bill Black'}
    />
  );
};

export default InputName;
