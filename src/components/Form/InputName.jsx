import { TextField } from '@mui/material';
import { textFieldStyle } from './Input.styled';

const InputName = ({ props }) => {
  console.log('🚀 ~ props:', props);

  const { register, errors, handleFilter } = props;

  return (
    <TextField
      sx={{
        ...textFieldStyle,
      }}
      onChange={e => handleFilter(e)}
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
