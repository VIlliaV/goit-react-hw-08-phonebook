import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { styled, Box } from '@mui/system';
import Modal from '@mui/base/Modal';
import { InputEmail, InputPassword } from 'components/Form';
import { login } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import leaf from '../../images/leaf.jpg';
import { Form } from './Login.styled';
import ModalAuth from 'components/Modal/ModalAuth';
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
    <ModalAuth>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputEmail props={{ register, errors }} />
        <InputPassword props={{ register, errors }} />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundImage: `url(${wood})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 10%',
            border: '2px solid rgb(87, 100, 90)',
            '&:hover ': {
              borderColor: 'rgba(170, 249, 190, 0.742)',
            },
          }}
        >
          Login
        </Button>
      </Form>
    </ModalAuth>
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
  padding: '36px 32px 36px 32px',
});

export default Login;
