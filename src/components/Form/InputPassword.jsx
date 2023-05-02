import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { textFieldStyle } from './Input.styled';
const InputPassword = ({ props }) => {
  const { register, errors } = props;

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(show => !show);
  };

  return (
    <TextField
      sx={{
        ...textFieldStyle,
      }}
      label="Password"
      variant="outlined"
      type={showPassword ? 'text' : 'password'}
      {...register('password', {
        required: true,
        minLength: 7,
      })}
      error={Boolean(errors.password)}
      helperText={
        errors.password?.type === 'minLength'
          ? 'Password must be at least 7 characters long'
          : errors.password?.type === 'required'
          ? 'Password is required'
          : null
      }
      placeholder={'********'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
              sx={{
                color: 'rgb(87, 100, 90)',
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputPassword;
