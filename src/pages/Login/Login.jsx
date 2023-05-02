import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { styled, Box } from '@mui/system';
import Modal from '@mui/base/Modal';
import { InputEmail, InputPassword } from 'components/Form';
import { login } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import wood from '../../images/wood.jpg';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    dispatch(login(data));
  };

  return (
    <div>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open="true"
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
        sx={{
          backgroundImage: `url(${wood})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 50%',
        }}
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputEmail props={{ register, errors }} />
            <InputPassword props={{ register, errors }} />
            <Button type="submit" variant="contained">
              Login
            </Button>
          </form>
        </Box>
      </StyledModal>
    </div>
  );
};

const Backdrop = forwardRef(function Backdrop(props, ref) {
  const { className, ...other } = props;
  return (
    <div className={` 'MuiBackdrop-open'  ${className}`} ref={ref} {...other} />
  );
});

const StyledModal = styled(Modal)({
  position: 'fixed',
  // zIndex: 1300,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledBackdrop = styled(Backdrop)({
  zIndex: -1,
  position: 'fixed',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,

  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  WebkitTapHighlightColor: 'transparent',
});

const style = theme => ({
  width: 400,
  bgcolor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  border: '2px solid black',
  padding: '16px 32px 24px 32px',
});

export default Login;
