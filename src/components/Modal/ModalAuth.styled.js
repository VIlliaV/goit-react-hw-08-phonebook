import { forwardRef } from 'react';

import { styled as styledMui } from '@mui/system';
import Modal from '@mui/base/Modal';

const Backdrop = forwardRef(function Backdrop(props, ref) {
  const { className, ...other } = props;
  return (
    <div className={` 'MuiBackdrop-open'  ${className}`} ref={ref} {...other} />
  );
});

const StyledModal = styledMui(Modal)({
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

const StyledBackdrop = styledMui(Backdrop)({
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

  bgcolor: theme.palette.mode === 'dark' ? '#0A1929' : 'rgb(29, 45, 34)',
  border: '2px solid rgb(87, 100, 90)',
  boxShadow: '5px 5px 10px rgba(170, 249, 190, 0.742)',
  padding: '16px 32px 24px 32px',
});

export { style, StyledBackdrop, StyledModal };
