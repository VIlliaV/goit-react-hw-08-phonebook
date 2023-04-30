import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';

const InputPassword = ({ props }) => {
  const { register, errors } = props;

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(show => !show);
  };
  return (
    <TextField
      label="Password"
      variant="outlined"
      type={showPassword ? 'text' : 'password'}
      {...register('password', { required: true })}
      error={Boolean(errors.password)}
      helperText={errors.password && 'Password is required'}
      placeholder={'********'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
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
