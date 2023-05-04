import Typography from '@mui/material/Typography';
import wood from '../../images/wood.jpg';
import {
  Image,
  ImageBackdrop,
  ImageButton,
  ImageMarked,
  ImageSrc,
  StyledBox,
  styledTypografy,
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
    <StyledBox>
      {images.map(image => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
            border: '2px solid  rgb(87, 100, 90)',
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
              sx={{ ...styledTypografy }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </StyledBox>
  );
};

export default Home;
