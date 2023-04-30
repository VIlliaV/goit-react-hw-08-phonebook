import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import wood from '../../images/wood.jpg';
import {
  Image,
  ImageBackdrop,
  ImageButton,
  ImageMarked,
  ImageSrc,
} from './Home.styled';
import { useNavigate } from 'react-router-dom';

const images = [
  {
    url: wood,
    title: 'REGISTRATION',
    width: '50%',
    route: 'register',
  },
  {
    url: wood,
    title: 'LOGIN',
    width: '50%',
    route: 'login',
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
      }}
    >
      {images.map(image => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
            border: '2px solid white',
          }}
          onClick={() => {
            navigate(image.route, { replace: true });
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: theme => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
};

export default Home;
