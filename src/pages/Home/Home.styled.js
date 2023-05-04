import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { Box } from '@mui/material';

const StyledBox = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  minWidth: 300,
  width: '100%',
});

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: '95vh',
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: '46vh',
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const styledTypografy = {
  fontSize: '28px',
  letterSpacing: '.3rem',
  textShadow: '4px 4px 8px rgba(170, 249, 190, 0.742)',
  color: ' rgba(255, 255, 255)',
  position: 'relative',
  p: 4,
  pt: 2,
  pb: theme => `calc(${theme.spacing(1)} + 6px)`,
};

export {
  styledTypografy,
  ImageButton,
  ImageSrc,
  Image,
  ImageBackdrop,
  ImageMarked,
  StyledBox,
};
