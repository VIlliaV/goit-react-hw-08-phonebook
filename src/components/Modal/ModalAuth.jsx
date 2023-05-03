import { Box } from '@mui/system';

import { useNavigate } from 'react-router-dom';
import {
  Container,
  StyledBackdrop,
  StyledModal,
  style,
} from './ModalAuth.styled';
import { useEffect, useState } from 'react';
import { ButtonType } from 'components/Form/ButtonType';

const ModalAuth = ({ isOpen, nameOpenButtonModal, children }) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    isOpen ? navigate('/') : setOpen(false);
  };

  return (
    <Container>
      {!isOpen && (
        <ButtonType type="button" onClick={handleOpen}>
          {nameOpenButtonModal}
        </ButtonType>
      )}
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <Box sx={style}>{children}</Box>
      </StyledModal>
    </Container>
  );
};

export default ModalAuth;
