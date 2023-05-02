import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { InputEmail, InputName, InputPassword } from 'components/Form';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/authOperations';
import { styled, Box } from '@mui/system';
import Modal from '@mui/base/Modal';
import { forwardRef } from 'react';
import wood from '../../images/wood.jpg';
import leaf from '../../images/leaf.jpg';
import { useNavigate } from 'react-router-dom';
import { Form } from '../../components/Modal/Register.styled';
import ModalAuth from 'components/Modal/ModalAuth';

const Register = () => {
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
    console.log('🚀 ~ data:', data);

    dispatch(signUp(data));
  };

  return (
    <ModalAuth>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputName props={{ register, errors }} />
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
          Submit
        </Button>
      </Form>
    </ModalAuth>
  );
};

// const Backdrop = forwardRef(function Backdrop(props, ref) {
//   const { className, ...other } = props;
//   return (
//     <div className={` 'MuiBackdrop-open'  ${className}`} ref={ref} {...other} />
//   );
// });

// const StyledModal = styled(Modal)({
//   position: 'fixed',
//   // zIndex: 1300,
//   right: 0,
//   bottom: 0,
//   top: 0,
//   left: 0,

//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// });

// const StyledBackdrop = styled(Backdrop)({
//   zIndex: -1,
//   position: 'fixed',
//   right: 0,
//   bottom: 0,
//   top: 0,
//   left: 0,

//   backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   WebkitTapHighlightColor: 'transparent',
// });

// const style = theme => ({
//   width: 400,
//   // backgroundImage: `url(${wood})`,
//   // backgroundSize: 'cover',
//   // backgroundPosition: 'center 50%',

//   bgcolor: theme.palette.mode === 'dark' ? '#0A1929' : 'rgb(29, 45, 34)',
//   border: '2px solid rgb(87, 100, 90)',
//   padding: '16px 32px 24px 32px',
// });

export default Register;
